module.exports = function (sequelize, DataTypes) {
  var ClientTask = sequelize.define("ClientTask", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Client',
        key: 'id'
      }
    },

    taskId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Task',
        key: 'id'
      }
    },


    status: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return ClientTask;
}


