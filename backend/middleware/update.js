const { updateBody } = require("../zod/types");

function updateZodValidator(req, res, next) {
    try {
        const success = updateBody.safeParse(req.body);

        if( !success ) {
            return res.status(400).json({
                message : "Invalid inputs"
            });
        }
        console.log("inputs validated");
        next();
    } catch (error) {
        return res.status(400).json( {
            message : error
        });

    }
}

module.exports = updateZodValidator;