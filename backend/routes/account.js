const  {Router} = require('express');
const authMiddleware = require('../middleware/auth');
const { Account } = require('../db/db');
const { default: mongoose } = require('mongoose');
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
            userId : balance.userId,
            balance : balance.balance,
        });


    } catch (error) {
        return res.status(400).json({
            message : error
        });
    }

});


router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();
    try {
        
        session.startTransaction();

        const fromAccount = req.userId;
        const {toAccount, amount} = req.body;

        // console.log(`from account : ${fromAccount}`);
        // console.log(`to account : ${toAccount} balance : ${typeof amount}`);


        // check if toAccount & fromAccount is present
        const toUserAccount = await Account.findOne({
            userId : toAccount
        }).session(session);
        const fromUserAccount = await Account.findOne({
            userId : fromAccount
        }).session(session);

        // console.log(toUserAccount);
        // console.log(fromUserAccount);

        if( !toUserAccount) {
            await session.abortTransaction();
            return res.status(404).json({
                message : "Invalid account to transfer money"
            });
        }

        if(fromUserAccount.balance < amount) {
            await session.abortTransaction();
            return res.status(400).json({
                message : "Insufficient balance"
            });
        }

        console.log(`successfully found both account`);

        await Account.updateOne( {
            userId: toAccount
        }, {
            $inc : {
                balance : amount
            }
        }).session(session);

        await Account.updateOne( {
            userId : fromAccount
        }, {
            $inc : {
                balance : -amount
            }
        }).session(session);

        // commit transaction
        await session.commitTransaction();
        console.log(`Amount transfered successfully`);
        return res.status(200).json({
            message : "Amount transfered successfully"
        });

    } catch (error) {
        await session.abortTransaction();
        return res.status(400).json({
            message : error
        });
    } finally {
        await session.endSession();
    }
});

module.exports = router;