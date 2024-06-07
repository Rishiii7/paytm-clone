// backend/routes/user.js
const express = require('express');
const { User, Account } = require('../db/db');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');
const singupZodValidator = require('../middleware/signup');
const singinZodValidator = require('../middleware/signin');
const authMiddleware = require('../middleware/auth');
const updateZodValidator = require('../middleware/update');

const router = express.Router();

// endpoint to get user information
router.get('/userId/:userId', async (req, res) => {
    
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);

        if(!user) {
            return res.status(404).json({
                message : `User not found`
            });
        }

        console.log(`user found ~~ ${user}`);
        return res.status(200).json({
            user : user
        });

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message : `Server error : ${error}`
        });
    }
});



// GET using filter
router.get("/bulk", authMiddleware, async (req, res) => {
    const filter = req.query.filter;

    // console.log(filter);

    try{
            const users = await User.find({
                $or : [{
                    firstName : {
                        "$regex" : filter
                    }
                }, {
                    lastName : {
                        "$regex" : filter
                    }
                }]
            });

            return res.status(200).json({
                message : "user founds",
                user : users.map( (user) => ({
                    username : user.username,
                    firstName : user.firstName,
                    lastName : user.lastName,
                    _id : user._id
                })),
            });

    } catch (error) {
        return res.status(400).json({
            message : error
        });
    }
    
});

// SingUp logic
router.post("/signup", singupZodValidator,  async (req, res) => {
    // singup logic

    const {username, firstName, lastName, password} = req.body;

    try {
        console.log("finding username is database");
        const existingUser = await User.findOne({
            name: username
        });

        if(existingUser) {
            return res.status(411).json({
                message : "Email already taken"
            });
        }

        console.log("username not found adding to the database");
    
        const user = new User({name:username, firstName:firstName, lastName:lastName, password:password});
        await user.save();

        console.log("user added to database");

        // once user is added assign a random balance
        const userBalance = Math.floor(Math.random() * (10000) + 1);
        // console.log(`Random balance: ${userBalance}`);
        const accountUser = new Account({
            userId : user._id,
            balance : userBalance,
        });

        await accountUser.save();
        console.log(`Balance added to your account`);

        const userId = user._id;
        console.log("Generating token");
        // create a token using jwt
        const jwtToken = jwt.sign({
            userId
        }, JWT_SECRET);
        
        console.log("token succesfully generated");
        console.log("function completed successfully");
        
        return res.status(200).json({
            message : "User created sucessfully",
            token : jwtToken
        });

    } catch (err) {
        return res.json({
            message : err
        });
    }
    
});

// signin logic
router.post("/signin", singinZodValidator, async (req, res) => {
    try{
        console.log("inside signin function");
        const {username, password} = req.body;
        const user = await User.findOne({
            name : username,
        });

        if( !user ){
            return res.status(404).json({
                message : "user not found!! Invalid Credentials"
            });
        }
        console.log("user found");
        const userId = user._id;
        console.log("creating token");

        const token = jwt.sign({
            userId
        }, JWT_SECRET);

        console.log("token successfully created");
        console.log("function completed");

        return res.status(200).json({
            message : "successfully singned In",
            token : token
        });

    } catch (error) {
        return res.status(411).json({
            message : error
        });
    }
});

// update user profile logic
router.put("/", authMiddleware, updateZodValidator ,async(req, res) => {
    try {
        console.log('inside user put function')
        const userId = req.userId;
        // console.log(`body is : ${req.body}`);

        await User.updateOne({
            _id : userId
        }, req.body);

        console.log("user updated");
        return res.status(200).json({
            message : "Updated successfully"
        });

    } catch (error) {
        return res.status(400).json({
            message : error
        });
    }

});

module.exports = router;