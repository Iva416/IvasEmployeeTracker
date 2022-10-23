const express = require('express');
const mysql = require('mysql2');
const consoleT = require('console.table');
const { default: inquirer } = require('inquirer');
const Connection = require('mysql2/typings/mysql/lib/Connection');
require('dotenv').config();

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: process.env.password,
        database: 'employee_db',
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


