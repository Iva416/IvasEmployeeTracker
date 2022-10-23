DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department {
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL

};

CREATE TABLE role {
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,

};

CREATE TABLE employee {
    ID INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    department_id INT,
}