const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Messages extends Model {}


Messages.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
           
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        message_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }

        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'messages',

    }
);

module.exports = Messages;