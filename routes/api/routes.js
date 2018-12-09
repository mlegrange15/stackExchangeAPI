const express = require("express");
const router = express.Router();
const axios = require("axios");

// Get users by sign up date and filter by number of results wanted
router.get("/users/:num/:date", (req, res) => {
  let num = req.params.num;
  let date = req.params.date;
  let userArray = [];
  axios
    .get(
      "https://api.stackexchange.com/2.2/users?pagesize=" +
        num +
        "&fromdate=" +
        date +
        "&order=asc&sort=creation&site=stackoverflow"
    )
    .then(response => {
      response.data.items.map(user => {
        let newUser = {
          user_id: 0,
          display_name: "",
          link: "",
          profile_image: ""
        };
        (newUser.user_id = user.user_id),
          (newUser.display_name = user.display_name),
          (newUser.link = user.link),
          (newUser.profile_image = user.profile_image),
          userArray.push(newUser);
      });
      res.send(userArray);
    })
    .catch(error => {
      console.log(error);
    });
});

// Get questions filtered by the ids of the users passed in
router.get("/questions/:ids", (req, res) => {
  let ids = req.params.ids;
  axios
    .get(
      "https://api.stackexchange.com/2.2/users/" +
        ids +
        "/questions?order=desc&sort=activity&site=stackoverflow"
    )
    .then(response => {
      res.send(response.data.items);
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
