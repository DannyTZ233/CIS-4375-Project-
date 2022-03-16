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
    store_id int not null,
    store_name varchar(50),
    address varchar(50),
    PRIMARY KEY(store_id)
);

CREATE TABLE employee_leave(
	leave_id int not null,
    category varchar(50) not null,
    PRIMARY KEY(leave_id)
);

CREATE TABLE employee_check_out(
	check_out_id int not null,
    type varchar(20) not null,
    PRIMARY KEY(check_out_id)
);

CREATE TABLE job_title(
	job_title_id int not null,
    category varchar(50) not null,
    PRIMARY KEY(job_title_id)
);

CREATE TABLE employee_check_in(
	check_in_id int not null,
    category varchar(50) not null,
    PRIMARY KEY(check_in_id)
);

CREATE TABLE employee_quit(
	employee_quit_id int not null,
    category varchar(50) not null,
    comment varchar(200) null,
    PRIMARY KEY (employee_quit_id)
);

CREATE TABLE employee(
	emp_id int not null,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    phone varchar(20) not null,
    email varchar(50) not null,
    job_date date,
    quit_date date,
    employee_quit_id int null,
    job_title_id int null,
    store_id int,
    PRIMARY KEY (emp_id)
);

CREATE TABLE employee_schedule(
	emp_id int not null,
    check_in_id int not null,
    start_time time null, 
    end_time time null,
    log_date date not null,
    leave_id int,
    check_out_id int null
);


CREATE TABLE employee_login(
	user_id int not null,
    password VARCHAR(100) not null,
    emp_id int not null,
    PRIMARY KEY (user_id)
);

ALTER TABLE employee_login ADD FOREIGN KEY(emp_id) REFERENCES employee(emp_id);

ALTER TABLE employee_schedule ADD PRIMARY KEY(emp_id, check_in_id);
ALTER TABLE employee_schedule ADD FOREIGN KEY(leave_id) REFERENCES employee_leave(leave_id);
ALTER TABLE employee_schedule ADD FOREIGN KEY(check_out_id) REFERENCES employee_check_out(check_out_id);

ALTER TABLE employee ADD FOREIGN KEY(job_title_id) REFERENCES job_title(job_title_id);
ALTER TABLE employee ADD FOREIGN KEY(employee_quit_id) REFERENCES employee_quit(employee_quit_id);
ALTER TABLE employee ADD FOREIGN KEY(store_id) REFERENCES store(store_id);

-- customer survey tables

CREATE TABLE customer_info(
	customer_id int not null,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    phone varchar(20) null,
    email varchar(20) null,
    zip varchar(20) null,
    customer_log_in_key int null,
    PRIMARY KEY (customer_id)
);

CREATE TABLE redeem(
	redeem_id int not null,
    point int not null,
    PRIMARY KEY (redeem_id)
);

CREATE TABLE rating(
	rating_id int not null,
    type varchar(50) not null,
    PRIMARY KEY (rating_id)
);

CREATE TABLE dish_category(
	dish_category_id int not null,
    dish_category VARCHAR(50) not null,
    PRIMARY KEY (dish_category_id)
);

CREATE TABLE dish(
	dish_id int not null,
    name varchar(50) not null,
    dish_category_id int not null,
    redeem_id int not null,
    PRIMARY KEY (dish_id)
);

CREATE TABLE customer_redeem(
	customer_id int not null,
    dish_id int not null,
    redeem_date datetime not null
);

CREATE TABLE service_review(
	service_review_id int not null,
    question VARCHAR(200) not null,
    comment VARCHAR(200) null,
    rating_id int not null,
    emp_id int not null,
    PRIMARY KEY (service_review_id)
);

CREATE TABLE environment_review(
	environment_review_id int not null,
    question VARCHAR(200) not null,
    comment VARCHAR(200) null,
    rating_id int not null,
    PRIMARY KEY (environment_review_id)
);

CREATE TABLE dish_review(
	dish_review_id int not null,
    question VARCHAR(200) not null,
    comment VARCHAR(200) not null,
    rating_id int not null,
    dish_id int not null,
    PRIMARY KEY (dish_review_id)
);

CREATE TABLE reward(
	reward_id int not null,
    type VARCHAR(100) not null,
    point int not null,
    PRIMARY KEY (reward_id)
);

CREATE TABLE customer_review(
	review_id int not null,
    date date not null,
    time time not null,
    rating int not null,
    comment VARCHAR(200) null,
    environment_review_id int null,
    dish_review_id int null,
    service_review_id int null,
    reward_id int not null,
    customer_id int not null,
    PRIMARY KEY (review_id)
);

CREATE TABLE employee_reply(
	emp_id int not null,
    review_id int not null, 
    date date not null,
    time time not null,
    responses varchar(200) not null
);

-- service review
ALTER TABLE service_review ADD FOREIGN KEY(rating_id) REFERENCES rating(rating_id);
ALTER TABLE service_review ADD FOREIGN KEY(emp_id) REFERENCES employee(emp_id);

-- environment review
ALTER TABLE environment_review ADD FOREIGN KEY(rating_id) REFERENCES rating(rating_id);

-- dish review
ALTER TABLE dish_review ADD FOREIGN KEY(rating_id) REFERENCES rating(rating_id);
ALTER TABLE dish_review ADD FOREIGN KEY(dish_id) REFERENCES dish(dish_id);

-- dish
ALTER TABLE dish ADD FOREIGN KEY(dish_category_id) REFERENCES dish_category(dish_category_id);
ALTER TABLE dish ADD FOREIGN KEY(redeem_id) REFERENCES redeem(redeem_id);

-- customer redeem
ALTER TABLE customer_redeem ADD PRIMARY KEY(customer_id, dish_id);

-- customer review
ALTER TABLE customer_review ADD FOREIGN KEY(environment_review_id) REFERENCES environment_review(environment_review_id);
ALTER TABLE customer_review ADD FOREIGN KEY(dish_review_id) REFERENCES dish_review(dish_review_id);
ALTER TABLE customer_review ADD FOREIGN KEY(service_review_id) REFERENCES service_review(service_review_id);
ALTER TABLE customer_review ADD FOREIGN KEY(reward_id) REFERENCES reward(reward_id);
ALTER TABLE customer_review ADD FOREIGN KEY(customer_id) REFERENCES customer_info(customer_id);

-- employee_reply
ALTER TABLE employee_reply ADD PRIMARY KEY(emp_id, review_id);