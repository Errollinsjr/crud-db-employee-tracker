const inquirer = require('inquirer');
const connection = require('./config/connection')

connection.connect((err) => {
  if (err) throw err;
  start();
});

const start = () => {
  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'Add employees',
        'Add roles',
        'Add departments',
        'View departments, roles, or employees?',
        'Update employee roles',
        'Delete departments, roles, and employees',
        'exit',
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case 'Add employees':
          addEmployee();
          break;

        case 'Add roles':
          addRole();
          break;

        case 'Add departments':
          addDepartment();
          break;

        case 'Search for a specific song':
          update();
          break;

        case 'Find all artists who appear more than once':
          multiSearch();
          break;

        case 'Find all artists who appear more than once':
          deleteFromDb();
          break;   

        case 'exit':
          connection.end();
          break;

        default:
          console.log(`Invalid action: ${answer.action}`);
          break;
      }
    });
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        name: 'firstName',
        type: 'input',
        message: 'First Name?',
      },
      {
        name: 'lastName',
        type: 'input',
        message: 'Last?',
      },
      {
        name: 'roleId',
        type: 'list',
        message: 'What is the role? 1 is Game Developer, 2 is Cyber Security Analyst, 3 is iT specialist, 4 is Software Developer, 5 is Hardware Developer, and 7 is special for Manager',
        choices: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '7',
        ]
      },
    ])
    .then((answer) => {
      const query = 'INSERT INTO employee SET ?';
      connection.query(query, 
        { 
         first_name: answer.firstName,
         last_name: answer.lastName,
         role_id: answer.roleId,       
        }, 
        (err) => {
        if (err) throw err;
        console.log("Successfully added employee"); 
        start();
      });
    });
};

const addRole = () => {
  inquirer
    .prompt([
      {
        name: 'title',
        type: 'input',
        message: 'Title?',
      },
      {
        name: 'salary',
        type: 'input',
        message: 'Salary?',
      },
      {
        name: 'departmentId',
        type: 'list',
        message: 'What is the role? 1 is Game Department, 2 is Cyber Department, 3 is iT department, 4 is Software Department, 5 is Hardware Department',
        choices: [
        '1',
        '2',
        '3',
        '4',
        '5',
        ]
      },
    ])
    .then((answer) => {
      const query = 'INSERT INTO employeeRole SET ?';
      connection.query(query, 
        { 
         title: answer.title,
         salary: answer.salary,
         department_id: answer.departmentId,       
        }, 
        (err) => {
        if (err) throw err;
        console.log("Successfully added role"); 
        start();
      });
    });
};

const addDepartment = () => {
  inquirer
    .prompt([
      {
        name: 'department',
        type: 'input',
        message: 'Title?',
      },
    ])
    .then((answer) => {
      const query = 'INSERT INTO department SET ?';
      connection.query(query, 
        {
         department_name: answer.department,       
        }, 
        (err) => {
        if (err) throw err;
        console.log("Successfully added department"); 
        start();
      });
    });
};


