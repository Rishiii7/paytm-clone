const { signinBody } = require("../zod/types");

function singinZodValidator(req, res, next) {
    try {
        console.log("inside singing validator function");
        const {username, password} = req.body;

        const success = signinBody.safeParse({
            username,
            password
        });

        if( !success ){
            return res.status(411).json({
                message : "Invalid inputs"
            });
        }
        
        console.log("Successfully validated");
        next();

    } catch (error) {
        return res.status(411).json({
            message : error
        });
    }
}

module.exports = singinZodValidator;