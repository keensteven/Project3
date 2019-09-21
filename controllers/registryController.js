const db = require("../models");
module.exports = {
    createRegistry: function(req,res){
        console.log(req.body)
        db.Registry
        .create(req.body)
        .then(dbRegistry => res.json(dbRegistry))

    },
    FindByUserID : function(req,res){
        console.log("find all");
      db.Registry
      .findAll({
          where:{
              user_Id:req.params.id} })
              .then(dbRegProduct => res.json(dbRegProduct));
    }
}