const { Role } = require('../models');

const roleData = [
  {
    role_name: 'Game Developer',
    salary: 75000.00,
    department_id: 1,
  },
  {
    role_name: 'Cyber Security Anaylst',
    salary: 85000.00,
    department_id: 2,
  },
  {
    role_name: 'iT specialist',
    salary: 60000.00,
    department_id: 3,
  },
  {
    role_name: 'Software Developer',
    salary: 95000.00,
    department_id: 4,
  },
  {
    role_name: 'Hardware Developer',
    salary: 105000.00,
    department_id: 5,
  },
];

const seedRoles = () => Role.bulkCreate(roleData);

module.exports = seedRoles;
