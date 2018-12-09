import axios from "axios";

export default {
  getUsers: function(num,date) {
    return axios.get("/api/users/" + num + "/" + date);
  },
  getUsersQuestions: function(userIDs) {
    return axios.get("/api/questions/" + userIDs);
  },
};
