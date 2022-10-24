DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE departments {
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL

};

CREATE TABLE roles {
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES departments(id)
};

CREATE TABLE employees {
    ID INT AUTO_INCREMENT PRIMARY KEY, 
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    department_id INT,
    FORIEGN KEY (roles_id) REFRENCES roles(id),
    FORIENG KEY (manager_id) REFERENCES employees(id),
};