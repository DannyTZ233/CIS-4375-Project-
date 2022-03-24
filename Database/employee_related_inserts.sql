-- Employee Related Tables Inserts

 USE cis4375db;
 
 -- store table inserts
INSERT INTO store(store_name, address) VALUES('Wasabi Bistro', '449 S Loop 336 W #1500 Conroe TX 77304');

-- employee_check_in table inserts
INSERT INTO employee_check_in(category) VALUES('Part Time');
INSERT INTO employee_check_in(category) VALUES('Full Time');
INSERT INTO employee_check_in(category) VALUES('Seasonal');

-- employee_check_out table inserts
INSERT INTO employee_check_out(type) VALUES('Lunch Break');
INSERT INTO employee_check_out(type) VALUES('Shift End');

-- employee_leave table inserts
INSERT INTO employee_leave(category) VALUES('Medical');
INSERT INTO employee_leave(category) VALUES('Vacation');
INSERT INTO employee_leave(category) VALUES('Jury Duty');
INSERT INTO employee_leave(category) VALUES('Pregnancy');
INSERT INTO employee_leave(category) VALUES('School');
INSERT INTO employee_leave(category) VALUES('Travel');
INSERT INTO employee_leave(category) VALUES('Holidays');

-- employee_quit table inserts
INSERT INTO employee_quit(category, comment) VALUES('has two jobs', 'termination has been processed');
INSERT INTO employee_quit(category, comment) VALUES('was unhappy with current pay', 'termination has been processed');
INSERT INTO employee_quit(category, comment) VALUES('was unable to workd due to school', 'termination is in process');

-- job_title table inserts
INSERT INTO job_title(category) VALUES('Owner');
INSERT INTO job_title(category) VALUES('Manager');
INSERT INTO job_title(category) VALUES('Cook');
INSERT INTO job_title(category) VALUES('Cashier');
INSERT INTO job_title(category) VALUES('Host');
INSERT INTO job_title(category) VALUES('Waitress');

-- employee table inserts
INSERT INTO employee(first_name, last_name, phone, email, job_date, quit_date, employee_quit_id, job_title_id, store_id) 
VALUES('Alan', 'Guo', '(936)-(756)-(2225)', 'gzq19910908@hotmail.com', '2019-02-23', null, null, 1, 1);
INSERT INTO employee(first_name, last_name, phone, email, job_date, quit_date, employee_quit_id, job_title_id, store_id)
VALUES('Mathew', 'Fisk', '(281)-(985)-(3287)', 'mathewfisk@gmail.com', '2019-02-24', null, null, 2, 1);
INSERT INTO employee(first_name, last_name, phone, email, job_date, quit_date, employee_quit_id, job_title_id, store_id)
VALUES('Hailey', 'Mill', '(832)-(254)-(2985)', 'haileymill@gmail.com', '2019-02-24', null, null, 2, 1);
INSERT INTO employee(first_name, last_name, phone, email, job_date, quit_date, employee_quit_id, job_title_id, store_id)
VALUES('Josh', 'Rogan', '(346)-(854)-(2984)', 'joshrogan@gmail.com', '2019-02-24', '2021-02-24', 1, 4, 1);
INSERT INTO employee(first_name, last_name, phone, email, job_date, quit_date, employee_quit_id, job_title_id, store_id)
VALUES('Crystal', 'Pepper', '(875)-(324)-(4235)', 'crystalpepper@gmail.com', '2019-02-25', null, null, 4, 1);
INSERT INTO employee(first_name, last_name, phone, email, job_date, quit_date, employee_quit_id, job_title_id, store_id)
VALUES('Melanie', 'Roggers', '(234)-(154)-(3579)', 'melanierogers@gmail.com', '2019-02-26', '2020-02-26', 2, 3, 1);
INSERT INTO employee(first_name, last_name, phone, email, job_date, quit_date, employee_quit_id, job_title_id, store_id)
VALUES('William', 'Parks', '(713)-(654)-(3712)', 'williamparks@gmail.com', '2019-02-27', null, null, 3, 1);
INSERT INTO employee(first_name, last_name, phone, email, job_date, quit_date, employee_quit_id, job_title_id, store_id)
VALUES('Jenny', 'Lou', '(281)-(357)-(9512)', 'jennylou@gmail.com', '2019-02-28', null, null, 3, 1);
INSERT INTO employee(first_name, last_name, phone, email, job_date, quit_date, employee_quit_id, job_title_id, store_id)
VALUES('Mike', 'Swoll', '(610)-(958)-(0123)', 'mikeswoll@gmail.com', '2019-08-15', '2020-08-15', 3, 3, 1);
INSERT INTO employee(first_name, last_name, phone, email, job_date, quit_date, employee_quit_id, job_title_id, store_id)
VALUES('Louise', 'Little', '(642)-(874)-(3674)', 'louiselittle@gmail.com', '2019-12-02', null, null, 5, 1);
INSERT INTO employee(first_name, last_name, phone, email, job_date, quit_date, employee_quit_id, job_title_id, store_id)
VALUES('Shelly', 'White', '(281)-(581)-(9871)', 'shellywhite@gmail.com', '2020-07-29', null, null, 5, 1);
INSERT INTO employee(first_name, last_name, phone, email, job_date, quit_date, employee_quit_id, job_title_id, store_id)
VALUES('John', 'Stevens', '(832)-(587)-(4892)', 'johnstevens@gmail.com', '2020-11-21', null, null, 6, 1);
INSERT INTO employee(first_name, last_name, phone, email, job_date, quit_date, employee_quit_id, job_title_id, store_id)
VALUES('Luke', 'Myers', '(713)-(851)-(3265)', 'lukemyers@gmail.com', '2021-05-17', null, null, 6, 1);
INSERT INTO employee(first_name, last_name, phone, email, job_date, quit_date, employee_quit_id, job_title_id, store_id)
VALUES('Clarissa', 'Jaimes', '(346)-(623)-(6741)', 'clarissajaimes@gmail.com', '2021-10-14', null, null, 5, 1);
INSERT INTO employee(first_name, last_name, phone, email, job_date, quit_date, employee_quit_id, job_title_id, store_id)
VALUES('Tina', 'Bell', '(859)-(680)-(0973)', 'tinabell@gmail.com', '2021-12-28', null, null, 4, 1);
