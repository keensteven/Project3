module.exports = function (sequelize, DataTypes) {
  var Product = sequelize.define("Product", {

    productName: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.DOUBLE
  });
  // Product.associate = function (models) {
  //   Product.hasMany(models.Registry, {
  //     onDelete: "cascade"
  //   })
  // };


  return Product;
};