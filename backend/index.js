const express = require('express');
const mainRouter = require('./routes/index');
const cors = require('cors');
const bodyParser = require('body-parser'); 
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('./config')
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api/v1", mainRouter);




const port = 3000; // Define a port

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

module.exports = app;