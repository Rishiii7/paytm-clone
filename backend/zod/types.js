const z = require('zod');

// define user schema
// example user
// {
// // 	"username": "name@gmail.com",
// // 	"firstName": "name",
// // 	"lastName": "name",
// // 	"password": "123456"
// }
// token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjVlOTE5MmM2YTg3NTgxYjZlMzM3ZjkiLCJpYXQiOjE3MTc0NzM2ODJ9.aQnCDC21UUWe2XVjnGxiODmcpre4egCDbskPE-oArGw

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