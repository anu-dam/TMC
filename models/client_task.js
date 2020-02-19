module.exports = function(sequelize, DataTypes) {
    var ClientTask = sequelize.define("ClientTask", {
        ClientId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        TaskId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return ClientTask;
}