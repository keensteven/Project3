import axios from "axios";

export default {
  saveUser: function(userData) {
    return axios.post("/api/enroll", userData);
  },
  authenticateUser: function(userData) {
    return axios.post("/api/login", userData);
  },
  loggedInStatus: function(userData) {
    return axios.post("/api/status", userData);
  },
  createRegistry: function(registryData) {
    return axios.post("/api/registry", registryData);
  },
  Finduserlist: function(userid) {
    return axios.get("/api/yourList/" + userid);
  }
};
