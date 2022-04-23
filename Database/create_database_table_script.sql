-- create database
-- Create table
-- alter table relations(add f key)
-- create query report base on business rules
-- employee scheudle management system first 
USE cis4375db;
DROP DATABASE IF EXISTS cis4375db;
CREATE DATABASE cis4375db;
USE cis4375db;
-- SHOW databases;

-- create employee tables 
CREATE TABLE store(
    store_id int not null AUTO_INCREMENT,
    s_name varchar(50),
    address varchar(50),
    PRIMARY KEY(store_id)
);



CREATE TABLE employee(
	emp_id int not null AUTO_INCREMENT,
    e_first_name varchar(50) not null,
    e_last_name varchar(50) not null,
    e_phone varchar(20) not null,
    e_email varchar(50) not null,
    join_date DATETIME DEFAULT NOW(),
    quit_date VARCHAR(50) null,
    job_title VARCHAR(50) null,
    store_id int,
    PRIMARY KEY (emp_id)
);

CREATE TABLE employee_schedule(
	emp_sch_id INT NOT NULL AUTO_INCREMENT,
	emp_id int not null,
    check_in_time VARCHAR(50) null,
    log_datetime DATETIME DEFAULT NOW(),
    check_out_time VARCHAR(50) null,
    total_time VARCHAR(50) null,
    PRIMARY KEY (emp_sch_id)
);


CREATE TABLE employee_login(
	login_id int not null AUTO_INCREMENT,
    password VARCHAR(100) not null,
    emp_id int not null Unique,
    PRIMARY KEY (login_id)
);

ALTER TABLE employee_login ADD FOREIGN KEY(emp_id) REFERENCES employee(emp_id);

ALTER TABLE employee_schedule ADD FOREIGN KEY(emp_id) REFERENCES employee(emp_id);

ALTER TABLE employee ADD FOREIGN KEY(store_id) REFERENCES store(store_id);

-- customer survey tables

CREATE table customer_survey(
	cus_sur_id INT NOT NULL AUTO_INCREMENT,
	zip_code VARCHAR(20) NULL NOT NULL,
    service_rating INT NOT NULL,
    environment_rating INT NOT NULL,
    food_rating INT NOT NULL,
    over_all_rating INT NOT NULL,
    sur_comment VARCHAR(200) NULL,
    sur_datetime DATETIME DEFAULT NOW(),
    PRIMARY KEY (cus_sur_id)
);


