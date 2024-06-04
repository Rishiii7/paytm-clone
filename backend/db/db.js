const mongoose = require('mongoose');

DB_URL = 'mongodb+srv://riso2414:QAZwsx%401234@cluster0.ud80h5k.mongodb.net/paytm'

// connect to the mongodb database
mongoose.connect(DB_URL);

// Define schema 
const UserSchema = new mongoose.Schema({
    name: String,
    password : String,
    firstName: String,
    lastName: String,
});

const AccountSchema = new mongoose.Schema({
    userId : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }],
    balance : {
        type : Number,
        required : true,
    },
});

// Create a monogodb table
const User = mongoose.model('User', UserSchema);
const Account = mongoose.model("Account", AccountSchema);

module.exports = {
    User,
    Account,
}