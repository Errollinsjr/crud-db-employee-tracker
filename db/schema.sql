-- DROP DATABASE
DROP DATABASE IF EXISTS employee_db;

-- CREATE DATABASE
CREATE DATABASE employee_db;

-- USE Database
USE employee_db;

-- Create department table --
CREATE TABLE department (
    id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

-- Create role table --
-- Parent table of employee --
CREATE TABLE employeeRole (
    id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id INTEGER NULL,
    PRIMARY KEY (id),
    CONSTRAINT FK_department_id FOREIGN KEY (department_id) 
    REFERENCES department(id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
);

-- Create employee table --
-- Child table of emprole
CREATE TABLE employee (
    id INTEGER NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NULL,
    manager_id INTEGER NULL,
    PRIMARY KEY (id),
    CONSTRAINT FK_role_id FOREIGN KEY (role_id) 
    REFERENCES employeeRole(id)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
    CONSTRAINT FK_manager_id FOREIGN KEY (manager_id)
    REFERENCES employeeRole(id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
);

-- Insert test data into tables --
INSERT INTO department (department_name) 
VALUES('Gaming Department'), ('Cyber Department'), ('iT Department'), 
('Software Department'), ('Hardware Department');

INSERT INTO employeeRole (title, salary, department_id) 
VALUES ('Game Developer', '100000', 1),('Cyber Security Anaylst', '65000', 2), ('Software Developer', '85000', 4), ('iT specialist', '75000', 3), ('Hardware Developer', 85000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Yoseph', 'Jo', 1, null), ('Nickel', 'Sickle', 2, null), ('Mose', 'Plicky', 4, null), ('Bopo','Eustace', 3, null);
