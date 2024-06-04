const z = require('zod');

// define user schema
// example user
// {
// // 	"username": "name@gmail.com",
// // 	"firstName": "name",
// // 	"lastName": "name",
// // 	"password": "123456"
// }
// token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjVlNDA2OGE1ZWYyZmQ0YmU0M2U5MTAiLCJpYXQiOjE3MTc0NTI5MDR9.Mb32g3peRugt5ZhsNMS4IQRqroadGG5PQj_X58kuMvo

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjVlOGNkMjAzNGVjOGY1NTJjMDA0YzAiLCJpYXQiOjE3MTc0NzI0NjZ9.x0TIrPDzjg1IHIZ-gQXpz3HQ_ZoyuYD1c1W4lXiZuwI
// user Rishi


const singupBody = z.object({
    username : z.string().email(),
    firstName : z.string(),
    lastName : z.string(),
    password : z.string()
});

const signinBody = z.object({
    username : z.string().email(),
    password : z.string()
});

const updateBody = z.object({
    password : z.string().optional(),
    firstName : z.string().optional(),
    lastName : z.string().optional(),

});

module.exports = {
    singupBody,
    signinBody,
    updateBody
};