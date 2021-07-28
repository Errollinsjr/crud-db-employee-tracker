// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const Role = require('./role');

// Initialize Employee model (table) by extending off Sequelize's Model class
class Employee extends Model {}

// set up fields and rules for Employee model
Employee.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }, 
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    role_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Role,
        key: 'id',
      },
    },
    manager_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Role,
        key: 'id',
      },
    },  
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'employee',
  }
);

module.exports = Employee;
