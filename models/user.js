module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    });
  
    User.associate = function(models) {
    
      User.hasMany(models.Registry, {
        onDelete: "cascade"
      });
    };
  
    return User;
  };