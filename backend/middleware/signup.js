const { singupBody } = require("../zod/types");


function singupZodValidator(req, res, next) {
    // console.log(req.body.username);
    // console.log(req.body.firstName);
    // console.log(req.body.lastName);
    // console.log(req.body.password);
    // const success = singupBody.safeParse({
    //     username : req.body.username,
    //     firstName : req.body.firstName,
    //     lastName : req.body.lastName,
    //     password : req.body.password
    // });
    
    try{

        console.log("inside validator");
        
        const {username, firstName, lastName, password} = req.body; 
        const success = singupBody.safeParse({
            username    : username,
            firstName   : firstName,
            lastName    : lastName,
            password    : password
        });

        console.log("inside validator successfull");

        if( !success ){
            return res.status(411).json({
                message : "Invalid Inputs"
            });
        }

        console.log("inside validator successfull");
        next();

    } catch (error) {
        return res.status(411).json({
            message : error
        });
    }
}

module.exports = singupZodValidator;