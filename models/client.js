module.exports = function(sequelize, DataTypes) {
    var Client = sequelize.define("Client", {
        //for this instance, this is the name of the school
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //currently this is hardcoded as "active". In future, can change to inactive, in order to remove from school list
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        //must be correct address
        //need to use in google map API to show the school location
        address: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });
    return Client;
}