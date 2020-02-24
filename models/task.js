module.exports = function(sequelize, DataTypes) {
    var Task = sequelize.define("Task", {
        //the title of the task, displayed int he table format
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        //the detail description of the task
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        },
        //an info for clients that this need to be completed by the mentioned date
        completedBy: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        //two values for this: 1. created, 2. assigned
        status: {
            type: DataTypes.STRING,
            allowNull: false
        }
        //this will get the login user and enter the id of the user in this column

    });
    
    //******************
    // tobe enabled in future to capture the login user id while creating the user
    /******************** */
    
    Task.associate = (models) => {
        Task.belongsToMany(models.Client, {
            through: 'ClientTask',
            as: 'tasks',
            foreignKey: 'taskId'
        });


        Task.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }            
        });
    };

    return Task;
}
