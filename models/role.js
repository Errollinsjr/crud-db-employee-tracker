const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Department= require('./department');


class Role extends Model {}

Role.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    salary: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    department_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Department,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'role',
  }
);

module.exports = Role;
