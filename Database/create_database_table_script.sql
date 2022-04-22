-- create database
-- Create table
-- alter table relations(add f key)
-- create query report base on business rules
-- employee scheudle management system first 

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

CREATE TABLE employee_leave(
	leave_id int not null AUTO_INCREMENT,
    el_category varchar(50) not null,
    PRIMARY KEY(leave_id)
);

CREATE TABLE employee_check_out(
	check_out_id int not null AUTO_INCREMENT,
    eco_category varchar(20) not null,
    PRIMARY KEY(check_out_id)
);

CREATE TABLE job_title(
	job_title_id int not null AUTO_INCREMENT,
    jt_category varchar(50) not null,
    PRIMARY KEY(job_title_id)
);

CREATE TABLE employee_check_in(
	check_in_id int not null AUTO_INCREMENT,
    eci_category varchar(50) not null,
    PRIMARY KEY(check_in_id)
);

CREATE TABLE employee_quit(
	employee_quit_id int not null AUTO_INCREMENT,
    eq_category varchar(50) not null,
    PRIMARY KEY (employee_quit_id)
);

CREATE TABLE employee(
	emp_id int not null AUTO_INCREMENT,
    e_first_name varchar(50) not null,
    e_last_name varchar(50) not null,
    e_phone varchar(20) not null,
    e_email varchar(50) not null,
    join_date VARCHAR(50) not null,
    quit_date VARCHAR(50) null,
    e_comment VARCHAR(200) null,
    employee_quit_id int null,
    job_title_id int null,
    store_id int,
    position varchar(100) not null
    PRIMARY KEY (emp_id)
);

CREATE TABLE employee_schedule(
	emp_sch_id INT NOT NULL AUTO_INCREMENT,
	emp_id int not null,
    check_in_id int null,
--     start_time time null, 
--     end_time time null,
    log_datetime DATETIME DEFAULT NOW(),
    leave_id int null,
    check_out_id int null,
    PRIMARY KEY (emp_sch_id)
);


CREATE TABLE employee_login(
	login_id int not null AUTO_INCREMENT,
    password VARCHAR(100) not null,
    emp_id int not null Unique,
    PRIMARY KEY (login_id)
);

ALTER TABLE employee_login ADD FOREIGN KEY(emp_id) REFERENCES employee(emp_id);

-- ALTER TABLE employee_schedule ADD PRIMARY KEY(emp_id, check_in_id);
ALTER TABLE employee_schedule ADD FOREIGN KEY(emp_id) REFERENCES employee(emp_id);
ALTER TABLE employee_schedule ADD FOREIGN KEY(check_in_id) REFERENCES employee_check_in(check_in_id);
ALTER TABLE employee_schedule ADD FOREIGN KEY(leave_id) REFERENCES employee_leave(leave_id);
ALTER TABLE employee_schedule ADD FOREIGN KEY(check_out_id) REFERENCES employee_check_out(check_out_id);

ALTER TABLE employee ADD FOREIGN KEY(job_title_id) REFERENCES job_title(job_title_id);
ALTER TABLE employee ADD FOREIGN KEY(employee_quit_id) REFERENCES employee_quit(employee_quit_id);
ALTER TABLE employee ADD FOREIGN KEY(store_id) REFERENCES store(store_id);

-- customer survey tables

CREATE TABLE customer_info(
	customer_id int not null AUTO_INCREMENT,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    phone varchar(20) null,
    email varchar(100) null,
    zip varchar(20) null,
    customer_log_in_key int null,
    PRIMARY KEY (customer_id)
);

CREATE TABLE redeem(
	redeem_id int not null AUTO_INCREMENT,
    point int not null,
    PRIMARY KEY (redeem_id)
);

CREATE TABLE rating(
	rating_id int not null AUTO_INCREMENT,
    r_category varchar(50) not null unique,
    PRIMARY KEY (rating_id)
);

CREATE TABLE dish_category(
	dish_category_id int not null AUTO_INCREMENT,
    dish_category VARCHAR(50) not null,
    PRIMARY KEY (dish_category_id)
);

CREATE TABLE dish(
	dish_id int not null AUTO_INCREMENT,
    dish_name varchar(50) not null,
    dish_category_id int not null,
    redeem_id int not null,
    PRIMARY KEY (dish_id)
);

CREATE TABLE customer_redeem(
	cus_redeem_id INT NOT NULL AUTO_INCREMENT,
	customer_id int not null,
    dish_id int not null,
    redeem_date DATETIME DEFAULT NOW(),
    PRIMARY KEY (cus_redeem_id)
);

-- service_review_question
-- all review tables should have reward point as foreign key
CREATE TABLE service_review_question(
	service_review_question_id int not null AUTO_INCREMENT,
    service_question VARCHAR(100) not null unique,
    PRIMARY KEY(service_review_question_id)
);

CREATE TABLE service_review(
	service_review_id int not null AUTO_INCREMENT,
    service_review_question_id int not null,
    rating_id int null,
    emp_id int null,
	customer_id int not null, 
    date_time DATETIME DEFAULT NOW(),
    PRIMARY KEY (service_review_id)
);

CREATE TABLE environment_review_question(
	environment_review_question_id int not null AUTO_INCREMENT,
    env_question VARCHAR(100) not null,
    PRIMARY KEY(environment_review_question_id)
);

CREATE TABLE environment_review(
	environment_review_id int not null AUTO_INCREMENT,
    environment_review_question_id int not null,
    rating_id int not null,
	customer_id int not null, 
    date_time DATETIME DEFAULT NOW(),
    PRIMARY KEY (environment_review_id)
);

CREATE TABLE dish_review(
	dish_review_id int not null AUTO_INCREMENT,
    dish_review_question_id int not null,
    rating_id int null,
    dish_id int null,
    customer_id int not null, 
    date_time DATETIME DEFAULT NOW(),
    PRIMARY KEY (dish_review_id)
);

CREATE TABLE dish_review_question(
	dish_review_question_id int not null AUTO_INCREMENT,
    dish_question VARCHAR(100) NOT NULL,
    PRIMARY KEY (dish_review_question_id)
);

CREATE TABLE reward(
	reward_id int not null AUTO_INCREMENT,
    reward_category VARCHAR(100) not null,
    r_point int not null,
    PRIMARY KEY (reward_id)
);

CREATE TABLE short_review_question (
	short_review_id int not null AUTO_INCREMENT,
    short_question VARCHAR(100) not null,
    PRIMARY KEY (short_review_id)
);

CREATE TABLE customer_short_review(
	review_id int not null AUTO_INCREMENT,
    -- date date not null,
    -- time time not null,
    short_review_id INT NOT NULL,
	date_time DATETIME DEFAULT NOW(),
    rating_id int not null,
    --  short_review_id int not null,
    --  environment_review_id int null,
    --  dish_review_id int null,
    --  service_review_id int null,
    --  reward_id int not null, 
    customer_id int not null,
    comment VARCHAR(200) null, 
    PRIMARY KEY (review_id)
);

CREATE TABLE customer_point(
	customer_point_id INT not null AUTO_INCREMENT,
    customer_id INT not null,
    reward_id INT not null,
    PRIMARY KEY (customer_point_id)
);

CREATE TABLE employee_reply(
	emp_reply_id INT NOT NULL AUTO_INCREMENT,
	emp_id int not null,
    customer_id int not null, 
    -- date date not null,
    -- time time not null,
	date_time DATETIME DEFAULT NOW(),
    responses varchar(200) not null,
    PRIMARY KEY (emp_reply_id)
);

-- service review
ALTER TABLE service_review ADD FOREIGN KEY(rating_id) REFERENCES rating(rating_id);
ALTER TABLE service_review ADD FOREIGN KEY(emp_id) REFERENCES employee(emp_id);
ALTER TABLE service_review add FOREIGN KEY (customer_id) REFERENCES customer_info(customer_id);
ALTER TABLE service_review ADD FOREIGN KEY (service_review_question_id) REFERENCES service_review_question(service_review_question_id);

-- environment review
ALTER TABLE environment_review ADD FOREIGN KEY(rating_id) REFERENCES rating(rating_id);
ALTER TABLE environment_review ADD FOREIGN KEY(environment_review_question_id) REFERENCES environment_review_question(environment_review_question_id);
ALTER TABLE environment_review add FOREIGN KEY (customer_id) REFERENCES customer_info(customer_id);

-- dish review
ALTER TABLE dish_review ADD FOREIGN KEY(rating_id) REFERENCES rating(rating_id);
ALTER TABLE dish_review ADD FOREIGN KEY(dish_id) REFERENCES dish(dish_id);
ALTER TABLE dish_review ADD FOREIGN KEY(dish_review_question_id) REFERENCES dish_review_question(dish_review_question_id);
ALTER TABLE dish_review add FOREIGN KEY (customer_id) REFERENCES customer_info(customer_id);

-- dish
ALTER TABLE dish ADD FOREIGN KEY(dish_category_id) REFERENCES dish_category(dish_category_id);
ALTER TABLE dish ADD FOREIGN KEY(redeem_id) REFERENCES redeem(redeem_id);

-- customer redeem
-- ALTER TABLE customer_redeem ADD PRIMARY KEY(customer_id, dish_id);
ALTER TABLE customer_redeem ADD FOREIGN KEY(customer_id) REFERENCES customer_info(customer_id);
ALTER TABLE customer_redeem ADD FOREIGN KEY(dish_id) REFERENCES dish(dish_id);
-- customer_short_review
-- ALTER TABLE customer_review ADD FOREIGN KEY(environment_review_id) REFERENCES environment_review(environment_review_id);
-- ALTER TABLE customer_review ADD FOREIGN KEY(dish_review_id) REFERENCES dish_review(dish_review_id);
-- ALTER TABLE customer_review ADD FOREIGN KEY(service_review_id) REFERENCES service_review(service_review_id);
-- ALTER TABLE customer_review ADD FOREIGN KEY(reward_id) REFERENCES reward(reward_id);
ALTER TABLE customer_short_review ADD FOREIGN KEY(rating_id) REFERENCES rating(rating_id);
ALTER TABLE customer_short_review ADD FOREIGN KEY(customer_id) REFERENCES customer_info(customer_id);
ALTER TABLE customer_short_review ADD FOREIGN KEY (short_review_id) REFERENCES short_review_question(short_review_id);

-- employee_reply
-- ALTER TABLE employee_reply ADD PRIMARY KEY(emp_id, review_id);
ALTER TABLE employee_reply ADD FOREIGN KEY (emp_id) REFERENCES employee(emp_id);
ALTER TABLE employee_reply ADD FOREIGN KEY (customer_id) REFERENCES customer_info(customer_id);
-- customer point
ALTER TABLE customer_point ADD FOREIGN KEY(customer_id) REFERENCES customer_info(customer_id);
ALTER TABLE customer_point ADD FOREIGN KEY(reward_id) REFERENCES reward(reward_id);

