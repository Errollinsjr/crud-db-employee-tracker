// import models
const Role = require('./role');
const Department = require('./department');
const Employee = require('./employee');

Role.belongsTo(Department, {
  foreignKey: 'department_id',
  onDelete: 'SET NULL',
});

// Department.hasMany(Role,  {
//   foreignKey: 'department_id',
// });

// Role.hasMany(Employee, {
//   through: 'Employee',
//   foreignKey: 'role_id',
// });

Employee.belongsToMany(Role, {
  through: 'Role',
  foreignKey: 'role_id',
});

// Employee.belongsToMany(Employee, {
//   through: 'Employee',
//   foreignKey: 'manager_id',
// });


module.exports = {
  Role,
  Department,
  Employee
};
