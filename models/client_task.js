module.exports = function(sequelize, DataTypes) {
    var ClientTask = sequelize.define("ClientTask", {
        //from client
        //Assigned client's id
        ClientId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Client',
                key: 'id'
            }
        },
        //from task table, assigned to the particular table
        TaskId: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'Task',
                key: 'id'
            }
        },
        //two status, 1. assigned, 2. completed
        status: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });



    return ClientTask;
}