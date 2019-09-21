const db = require("../models");
//var passport = require("../config/passport");

module.exports = {
    authenticate: function(){

    },
    create: function(req, res) {
        db.User
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
}