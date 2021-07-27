// import models
const Role = require('./role');
const Department = require('./department');
const Employee = require('./employee');

Role.belongsTo(Department, {
  foreignKey: 'Department_id',
  onDelete: 'SET NULL',
});

Department.hasMany(Role,  {
  foreignKey: 'Department_id',
});

Role.belongsToMany(Employee, {
  through: 'Employee',
  foreignKey: 'Role_id',
});


module.exports = {
  Role,
  Department,
  Tag,
  RoleTag,
};
