module.exports = function (sequelize, DataTypes) {
    var Registry = sequelize.define("Registry", {

        dt_claimed: DataTypes.DATE,
        dt_purchased: DataTypes.DATE,
        product_Name: DataTypes.STRING,
        product_Image: DataTypes.STRING,
        user_Id: DataTypes.INTEGER,
        product_Id: DataTypes.INTEGER

    });

    // Registry.associate = function (models) {
    //     Registry.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    //     Registry.belongsTo(models.Product, {
    //         foreignKey: {
    //             allowNull: false
    //         }           
    //     });
        
    // }
        return Registry;
    };