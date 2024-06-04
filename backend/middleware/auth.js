const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
const { User } = require('../db/db');

async function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({
            message : "empty header"
        });
    }
    try {
        console.log("inside auth middleware");
        
        const token = authHeader.split(" ")[1];

        console.log("extracted token");
        console.log(token);

        const decode = jwt.verify(token, JWT_SECRET);
        console.log(decode.userId);

        const existUser = await User.findById(decode.userId);

        if( !existUser ){
            return res.status(403).json({
                message : "Invalid authorization"
            });
        }
        
        req.userId = decode.userId;
        console.log("validated successfully");
        next();

    } catch (error) {
        return res.status(410).json({
            message : error
        });
    }
}

module.exports = authMiddleware;