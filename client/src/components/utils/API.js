import axios from "axios";

export default {
  // Gets first 20 users from previous month
  getUsers: function() {
    return axios.get("/api/users");
  },
  getUsersQuestions: function(userIDs) {
    return axios.get("/api/questions/" + userIDs);
  },
};
