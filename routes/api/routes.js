const express = require("express");
const router = express.Router();
const axios = require('axios')

// Get api/users
router.get('/users', (req, res) => {
    let userArray = []
    axios.get('https://api.stackexchange.com/2.2/users?pagesize=8&fromdate=1541030400&todate=1543536000&order=asc&sort=creation&site=stackoverflow')
        .then(response => {
            response.data.items.map(user => {
                let newUser = {
                    user_id: 0,
                    display_name: "",
                    link: "",
                    profile_image: "",
                }
                newUser.user_id = user.user_id,
                    newUser.display_name = user.display_name,
                    newUser.link = user.link,
                    newUser.profile_image = user.profile_image,
                    userArray.push(newUser)
            })
            // console.log("THIS IS THE USER ARRAY", userArray);
            res.send(userArray)
        })
        .catch(error => {
            console.log(error);
        });
})

router.get('/questions/:id', (req, res) => {
    let id = req.params.id
    console.log("This is the params test ", id);
    axios.get('https://api.stackexchange.com/2.2/users/' + id + '/questions?order=desc&sort=activity&site=stackoverflow')
        .then(response => {
            res.send(response.data.items)
        })
        .catch(error => {
            console.log(error);
        });
})

module.exports = router