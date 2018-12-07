const express = require("express");
const router = express.Router();
const axios = require('axios')

// Get api/users
router.get('/users', (req, res) => {
    let userArray = []
    axios.get('https://api.stackexchange.com/2.2/users?pagesize=2&fromdate=1541030400&todate=1543536000&order=desc&sort=creation&site=stackoverflow')
        .then(response => {
            // console.log(response.data.items);
            response.data.items.map(user => {
                userArray.push(user)
            })
            // console.log("THIS IS THE USER ARRAY", userArray);
            res.json(userArray)
        })
        .catch(error => {
            console.log(error);
        });
})

module.exports = router