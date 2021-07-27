const { Department } = require('../models');

const departmentData = [
  {
    department_name: 'GamingDepartment',
  },
  {
    department_name: 'CyberDepartment',
  },
  {
    department_name: 'iTDepartment',
  },
  {
    department_name: 'SoftwareDepartment',
  },
  {
    department_name: 'Hardware-Department',
  },
];

const seedDepartments = () => Department.bulkCreate(departmentData);

module.exports = seedDepartments;
