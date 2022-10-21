INSERT INTO Departments (name)
VALUES ('Service'), ('Sales'), 

INSERT INTO Roles (title, salary, department_id)
VALUES ('General manager', 150000, 2),  ('Service manager', 100000, 1), ('Service Advisor', 80000, 1), ('Mechanic', 65000, 1), ('Sales Person', 70000, 2), ('Receptionist', 60000, 2)

INSERT INTO Employees (first_name, last_name, role_id, manager_id)
VALUES ('Andrew', 'Burns', 2, 2), ('Rick', 'Owens', 1, NULL), ('Matt', 'Lenning', 1, 1), ('Sally', 'Johnson', 2, 2), ('Maria', 'Peterson', 2, 2)

