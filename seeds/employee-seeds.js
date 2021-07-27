const { Employee } = require('../models');

const employeeData = [
  {
    first_name: 'Josh',
    last_name: 'Yoseph',
    role_id: 1
  },
  {
    first_name: 'Michael',
    last_name: 'Lawerance',
    role_id: 2
  },
  {
    first_name: 'Usher',
    last_name: 'Yones',
    role_id: 3
  },
  {
    first_name: 'Mitsuki',
    last_name: 'Karo',
    role_id: 4
  },
  {
    first_name: 'Yopen',
    last_name: 'Jo',
    role_id: 5
  },
];

const seedEmployees = () => Employee.bulkCreate(employeeData);

module.exports = seedEmployees;
