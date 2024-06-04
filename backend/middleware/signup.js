const singupBody = require("../zod/types");

function singupZodValidator(req, res, next) {
    console.log(req.body.username);
    
    try{

        console.log("inside validator");
        
        const {username, firstName, lastName, password} = req.body; 
        const success = singupBody.safeParse({
            username : username,
            firstName : firstName,
            lastName : lastName,
            password : password
        });

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