const seedEmployees = require('./employee-seeds');
const seedDepartments = require('./department-seeds');
const seedRoles = require('./role-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedEmployees();
  console.log('\n----- Employees SEEDED -----\n');

  await seedDepartments();
  console.log('\n----- Departments SEEDED -----\n');

  await seedRoles();
  console.log('\n----- Roles SEEDED -----\n');

  process.exit(0);
};

seedAll();
