module.exports = function(sequelize, DataTypes) {
    var ClientTask = sequelize.define("ClientTask", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return ClientTask;
}