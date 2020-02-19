module.exports = function(sequelize, DataTypes) {
    var Task = sequelize.define("Task", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        },
        completedBy: {
            //type: DataTypes.TEXT,
            allowNull: false
        },
        status: {
            //type: DataTypes.TEXT,
            allowNull: false
        },
        creator: {
            //type: DataTypes.TEXT,
            allowNull: false
        }
    });
