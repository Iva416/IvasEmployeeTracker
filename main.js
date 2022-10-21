const express = require('express');
const mysql = require('mysql2');
const consoleT = require('console.table');
const { default: inquirer } = require('inquirer');
require('dotenv').config()

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
        name: 

    }    
    ])
}