import axios from "axios";

export default {
  // Gets first 20 users from previous month
  getUsers: function() {
    return axios.get("/api/users");
  },
  getUsersQuestions: function(userID) {
    return axios.get("/api/questions/" + userID);
  },

};
