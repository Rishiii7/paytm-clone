// backend/routes/user.js
const express = require('express');
const { User } = require('../db/db');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');
const singupZodValidator = require('../middleware/signup');
const singinZodValidator = require('../middleware/signin');
const authMiddleware = require('../middleware/auth');
const updateZodValidator = require('../middleware/update');

const router = express.Router();

// user has 2 routes singup, singin

router.get("/bulk", authMiddleware, (req, res) => {
    
});


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