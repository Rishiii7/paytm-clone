const  {Router} = require('express');
const authMiddleware = require('../middleware/auth');
const { Account } = require('../db/db');
const router = Router();


router.get("/balance", authMiddleware, async (req, res) => {

    try{

        const userId = req.userId;
        const balance = await Account.findOne({
            userId : userId,
        });

        if (!balance) {
            return res.status(404).json({
                message : "Balance not found something went wrong",
            });
        }

        console.log(`retrieved the balance`);
        return res.status(200).json({
            message : "Balance",
            balance : balance.balance,
        });


    } catch (error) {
        return res.status(400).json({
            message : error
        });
    }

});

module.exports = router;