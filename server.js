const inquirer = require('inquirer');
const mysql = require('mysql2');
require('console.table');
require('dotenv').config();

const db = mysql.createConnection(
    {
        host: 'localhost',
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    },
    console.log('connected to the employee_db database.')
);

const initialPrompt = () => {
    inquirer
    .prompt ([
    {
        type: 'list',
        message: 'Pick one of the following options:',
        name: 'choices',
        choices: 
        [
        'View All Employees',
        'Add Employee', 
        'Update Employee Role',
        'View All Roles',
        'Add role', 
        'View All Departments',
        'Add Department']    
    },    
])
.then((response) => {
    if (response.choices === 'View All Employees') {
        viewAllEmployees()
    } else if (response.choices === 'Add Employee') {
        addEmployee()
    } else if (response.choices === 'Update Employee Role') {
        updateRole() 
    } else if (response.choices === 'ViewAllRoles') {
        viewAllRoles()
    } else if (response.choices === 'Add role') {
        addRole()
    } else if (response.choices === 'View All Department') {
        viewAllDepartment()
    } else if (response.choices === 'Add Department'){
        addDepartment()
    }
    
});
};
const viewAllEmployees = () => {
    db.query('SELECT  employee.id, employee.first_name, employee.last_name, employee_role.title AS Title, department.name AS Department, employee_role.salary AS Salary, CONCAT(e.first_name," ", e.last_name) AS Manager FROM employee INNER JOIN employee_role on employee_role.id = employee.role_id INNER JOIN department on department.id = employee_role.department_id left join employee e on employee.manager_id = e.id;', (err, res) => {
          if (err) throw err;
          console.table(rows);
          initialPrompt()
    });

};

const addEmployee = () => {
    inquirer
    .prompt ([
        {
            type: 'input',
            message: 'What is the employees first name?',
            name: 'firstname'
        },
        {
            type: 'input',
            message: 'What is the employees last name?',
            name: 'lastname'
        }
        {
            type: 'input',
            message: 'What is the employees role ID number?',
            name: 'role'
        }
        ])
        .then((response) => {
            db.query(`INSERT INTO employees (first_name, last_name, role_id) VALUES ('${response.firstname}', '${response.lastname}', '${response.role}')`), (err, res) => {
                if (err) throw err;
                console.table(rows);
                initialPrompt();
            };
    })
}