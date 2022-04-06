USE cis4375db;

-- employee leave
INSERT INTO employee_leave(el_category) VALUES ('Sick');
INSERT INTO employee_leave(el_category) VALUES ('Excused Absences');
INSERT INTO employee_leave(el_category) VALUES ('Vacation');
INSERT INTO employee_leave(el_category) VALUES ('Family and Medical Leave');
INSERT INTO employee_leave(el_category) VALUES ('Unexcused Absences');

-- employee_check_in
INSERT INTO employee_check_in(eci_category) VALUES ('Full Time');
INSERT INTO employee_check_in(eci_category) VALUES ('Part Time');

-- employee_check_out
INSERT INTO employee_check_out(eco_category) VALUES ('Break');
INSERT INTO employee_check_out(eco_category) VALUES ('Off Work');

-- store
INSERT INTO store(s_name, address) VALUES ('Wasabi Bistro', 'wasabi street Conroe, TX');
-- job title
INSERT INTO job_title(jt_category) VALUES ('General Manager');
INSERT INTO job_title(jt_category) VALUES ('Assistant Manager');
INSERT INTO job_title(jt_category) VALUES ('Executive Chef');
INSERT INTO job_title(jt_category) VALUES ('Sous Chef');
INSERT INTO job_title(jt_category) VALUES ('Kitchen Manager');
INSERT INTO job_title(jt_category) VALUES ('Line Cook');
INSERT INTO job_title(jt_category) VALUES ('Server');
INSERT INTO job_title(jt_category) VALUES ('Busser/Bus');
INSERT INTO job_title(jt_category) VALUES ('Host/Hostess');
INSERT INTO job_title(jt_category) VALUES ('Dish Washer');
-- employee quit
INSERT INTO employee_quit(eq_category) VALUES('Dissatisfied');
INSERT INTO employee_quit(eq_category) VALUES('No Benefits');
INSERT INTO employee_quit(eq_category) VALUES('COVID safety concerns');
INSERT INTO employee_quit(eq_category) VALUES('WOrk Environment');
INSERT INTO employee_quit(eq_category) VALUES('Conflicts');

-- employee 
INSERT INTO employee(e_first_name, e_last_name, e_phone, e_email, join_date, quit_date, e_comment, employee_quit_id, job_title_id, store_id)
VALUES ('Alan', 'Guo', '(936)-(756)-(2225)', 'gzq19910908@hotmail.com', '2019-02-23', null, null, null, 1, 1);
INSERT INTO employee(e_first_name, e_last_name, e_phone, e_email, join_date, quit_date, e_comment, employee_quit_id, job_title_id, store_id)
VALUES ('Mathew', 'Fisk', '(281)-(985)-(3287)', 'mathewfisk@gmail.com', '2019-02-24', null, 'good employee', null, 2, 1);
INSERT INTO employee(e_first_name, e_last_name, e_phone, e_email, join_date, quit_date, e_comment, employee_quit_id, job_title_id, store_id)
VALUES ('Hailey', 'Mill', '(832)-(254)-(2985)', 'haileymill@gmail.com', '2019-02-24', null, 'hard working, and dedicated', null, 2, 1);
INSERT INTO employee(e_first_name, e_last_name, e_phone, e_email, join_date, quit_date, e_comment, employee_quit_id, job_title_id, store_id)
VALUES ('Josh', 'Rogan', '(346)-(854)-(2984)', 'joshrogan@gmail.com', '2019-02-24', '2021-02-24', 'lazy individual', 1, 4, 1);
INSERT INTO employee(e_first_name, e_last_name, e_phone, e_email, join_date, quit_date, e_comment, employee_quit_id, job_title_id, store_id)
VALUES ('Crystal', 'Pepper', '(875)-(324)-(4235)', 'crystalpepper@gmail.com', '2019-02-25', null, 'nice and friendly', null, 4, 1);
INSERT INTO employee(e_first_name, e_last_name, e_phone, e_email, join_date, quit_date, e_comment, employee_quit_id, job_title_id, store_id)
VALUES ('Melanie', 'Roggers', '(234)-(154)-(3579)', 'melanierogers@gmail.com', '2019-02-26', '2020-02-26', 'unskilled and lied on resume', 2, 3, 1);
INSERT INTO employee(e_first_name, e_last_name, e_phone, e_email, join_date, quit_date, e_comment, employee_quit_id, job_title_id, store_id)
VALUES ('William', 'Parks', '(713)-(654)-(3712)', 'williamparks@gmail.com', '2019-02-27', null, 'skilled', null, 3, 1);
INSERT INTO employee(e_first_name, e_last_name, e_phone, e_email, join_date, quit_date, e_comment, employee_quit_id, job_title_id, store_id)
VALUES ('Jenny', 'Lou', '(281)-(357)-(9512)', 'jennylou@gmail.com', '2019-02-28', null, null, null, 3, 1);
INSERT INTO employee(e_first_name, e_last_name, e_phone, e_email, join_date, quit_date, e_comment, employee_quit_id, job_title_id, store_id)
VALUES ('Mike', 'Swoll', '(610)-(958)-(0123)', 'mikeswoll@gmail.com', '2019-08-15', '2020-08-15', null, 3, 3, 1);
INSERT INTO employee(e_first_name, e_last_name, e_phone, e_email, join_date, quit_date, e_comment, employee_quit_id, job_title_id, store_id)
VALUES ('Louise', 'Little', '(642)-(874)-(3674)', 'louiselittle@gmail.com', '2019-12-02', null, null, null, 5, 1);
INSERT INTO employee(e_first_name, e_last_name, e_phone, e_email, join_date, quit_date, e_comment, employee_quit_id, job_title_id, store_id)
VALUES ('Shelly', 'White', '(281)-(581)-(9871)', 'shellywhite@gmail.com', '2020-07-29', null, null, null, 5, 1);
INSERT INTO employee(e_first_name, e_last_name, e_phone, e_email, join_date, quit_date, e_comment, employee_quit_id, job_title_id, store_id)
VALUES ('John', 'Stevens', '(832)-(587)-(4892)', 'johnstevens@gmail.com', '2020-11-21', null, null, null, 6, 1);
INSERT INTO employee(e_first_name, e_last_name, e_phone, e_email, join_date, quit_date, e_comment, employee_quit_id, job_title_id, store_id)
VALUES ('Luke', 'Myers', '(713)-(851)-(3265)', 'lukemyers@gmail.com', '2021-05-17', null, null, null, 6, 1);
INSERT INTO employee(e_first_name, e_last_name, e_phone, e_email, join_date, quit_date, e_comment, employee_quit_id, job_title_id, store_id)
VALUES ('Clarissa', 'Jaimes', '(346)-(623)-(6741)', 'clarissajaimes@gmail.com', '2021-10-14', null, null, null, 5, 1);
INSERT INTO employee(e_first_name, e_last_name, e_phone, e_email, join_date, quit_date, e_comment, employee_quit_id, job_title_id, store_id)
VALUES ('Tina', 'Bell', '(859)-(680)-(0973)', 'tinabell@gmail.com', '2021-12-28', null, null, null, 4, 1);

-- employee_schedule
INSERT INTO employee_schedule(emp_id, check_in_id, leave_id, check_out_id)
VALUES(1, 1, null, null);
INSERT INTO employee_schedule(emp_id, check_in_id, leave_id, check_out_id)
VALUES(2, 2, null, null);
INSERT INTO employee_schedule(emp_id, check_in_id, leave_id, check_out_id)
VALUES(3, null, 2, null);
INSERT INTO employee_schedule(emp_id, check_in_id, leave_id, check_out_id)
VALUES(4, 2, null, null);
INSERT INTO employee_schedule(emp_id, check_in_id, leave_id, check_out_id)
VALUES(5, 1, null, null);
INSERT INTO employee_schedule(emp_id, check_in_id, leave_id, check_out_id)
VALUES(6, 2, null, null);
INSERT INTO employee_schedule(emp_id, check_in_id, leave_id, check_out_id)
VALUES(7, 1, null, null);
INSERT INTO employee_schedule(emp_id, check_in_id, leave_id, check_out_id)
VALUES(8, 2, null, null);
INSERT INTO employee_schedule(emp_id, check_in_id, leave_id, check_out_id)
VALUES(9, 1, null, null);
INSERT INTO employee_schedule(emp_id, check_in_id, leave_id, check_out_id)
VALUES(10, 2, null, null);

-- employee_login
INSERT INTO employee_login(password, emp_id) VALUES ('123456', 1);
INSERT INTO employee_login(password, emp_id) VALUES ('123456', 2);
INSERT INTO employee_login(password, emp_id) VALUES ('123456', 3);
INSERT INTO employee_login(password, emp_id) VALUES ('123456', 4);
INSERT INTO employee_login(password, emp_id) VALUES ('123456', 5);
INSERT INTO employee_login(password, emp_id) VALUES ('123456', 6);
INSERT INTO employee_login(password, emp_id) VALUES ('123456', 7);
INSERT INTO employee_login(password, emp_id) VALUES ('123456', 8);
INSERT INTO employee_login(password, emp_id) VALUES ('123456', 9);
INSERT INTO employee_login(password, emp_id) VALUES ('123456', 10);
INSERT INTO employee_login(password, emp_id) VALUES ('123456', 11);
INSERT INTO employee_login(password, emp_id) VALUES ('123456', 12);
INSERT INTO employee_login(password, emp_id) VALUES ('123456', 13);
INSERT INTO employee_login(password, emp_id) VALUES ('123456', 14);
INSERT INTO employee_login(password, emp_id) VALUES ('123456', 15);

SELECT * FROM employee_schedule;

SELECT a.e_first_name, a.e_last_name, b.jt_category
FROM employee a
JOIN job_title as b
ON a.job_title_id = b.job_title_id;

SELECT a.emp_id, b.e_first_name, b.e_last_name, c.eci_category, a.log_datetime
FROM employee_schedule as a
JOIN employee as b
ON a.emp_id = b.emp_id
JOIN employee_check_in as c
ON a.check_in_id = c.check_in_id;


-- ---------------------------Customer Survey Tables-----------------------------------

-- dish category 
INSERT INTO dish_category (dish_category) VALUES ("Appetizers");
INSERT INTO dish_category (dish_category) VALUES ("Signature Appetizers");
INSERT INTO dish_category (dish_category) VALUES ("Soup & Salad");
INSERT INTO dish_category (dish_category) VALUES ("Rice & Noodle");
INSERT INTO dish_category (dish_category) VALUES ("Noodle Soup");
INSERT INTO dish_category (dish_category) VALUES ("Vegetable");
INSERT INTO dish_category (dish_category) VALUES ("Chinese Dinner");
INSERT INTO dish_category (dish_category) VALUES ("Naruta");
INSERT INTO dish_category (dish_category) VALUES ("Japanese Dinner");
INSERT INTO dish_category (dish_category) VALUES ("Chef Special");
INSERT INTO dish_category (dish_category) VALUES ("Sushi/Sashimi Combination");
INSERT INTO dish_category (dish_category) VALUES ("Fusion Roll");
INSERT INTO dish_category (dish_category) VALUES ("Rolls (Maki) / Hand Roll (Temaki)");
INSERT INTO dish_category (dish_category) VALUES ("Sushi / Sashimi");
INSERT INTO dish_category (dish_category) VALUES ("Kids Menu");
INSERT INTO dish_category (dish_category) VALUES ("Chinese Lunch Special");
INSERT INTO dish_category (dish_category) VALUES ("Japanese Lunch Bento Box");
INSERT INTO dish_category (dish_category) VALUES ("Lunch Rolls Menu");
INSERT INTO dish_category (dish_category) VALUES ("Sushi & Sashimi Lunch Combo");

-- customer info
INSERT INTO customer_info (first_name, last_name, phone, email, zip, customer_log_in_key) VALUES("Craig", "Lewis", "9558562054","CraigLew@gmail.com", "69865", 556673);
INSERT INTO customer_info (first_name, last_name, phone, email, zip, customer_log_in_key) VALUES("Darren", "Burns", "5864754738","DarrenBur@icloud.com", "03597", 761942);
INSERT INTO customer_info (first_name, last_name, phone, email, zip, customer_log_in_key) VALUES("Robert", "Carlin", "0558471816","RobertCar@gmail.com", "69865", 984407);
INSERT INTO customer_info (first_name, last_name, phone, email, zip, customer_log_in_key) VALUES("Etha", "Myers", "0028191516","EthaMye@163.com", "81179", 092299);
INSERT INTO customer_info (first_name, last_name, phone, email, zip, customer_log_in_key) VALUES("Kai", "Kowal", "5176410049","KaiKow@aol.com", "50395", 812405);
INSERT INTO customer_info (first_name, last_name, phone, email, zip, customer_log_in_key) VALUES("Minnie", "Frazier", "5464793923","MinnieFra@163.com", "81179", 276858);
INSERT INTO customer_info (first_name, last_name, phone, email, zip, customer_log_in_key) VALUES("Mike", "Dawson", "5961073982","MikeDaw@protonmail.com", "86412", 263171);
INSERT INTO customer_info (first_name, last_name, phone, email, zip, customer_log_in_key) VALUES("Krystal", "Weston", "9588264651","KrystalWes@outlook.com", "32801", 996765);
INSERT INTO customer_info (first_name, last_name, phone, email, zip, customer_log_in_key) VALUES("Lewis", "Moodie", "7619213987","LewisMoo@zohomail.com", "74544", 377786);
INSERT INTO customer_info (first_name, last_name, phone, email, zip, customer_log_in_key) VALUES("Mildred", "Madsen", "8636296264","MildredMad@163.com", "81179", 294472);
INSERT INTO customer_info (first_name, last_name, phone, email, zip, customer_log_in_key) VALUES("James", "Olcott", "1071192643","JamesOlc@zohomail.com", "74544", 691882);
INSERT INTO customer_info (first_name, last_name, phone, email, zip, customer_log_in_key) VALUES("Deangelo", "Webber", "0987280006","DeangeloWeb@gmx.com", "45275", 287396);
INSERT INTO customer_info (first_name, last_name, phone, email, zip, customer_log_in_key) VALUES("Gwendolyn", "Littlefield", "9039566760","GwendolynLit@hotmail.com", "67737", 278055);
INSERT INTO customer_info (first_name, last_name, phone, email, zip, customer_log_in_key) VALUES("Crystal", "Cam", "3834959142","CrystalCam@yahoo.com", "28803", 321743);
INSERT INTO customer_info (first_name, last_name, phone, email, zip, customer_log_in_key) VALUES("Lois", "Karel", "6297257195","LoisKar@163.com", "81179", 618099);
INSERT INTO customer_info (first_name, last_name, phone, email, zip, customer_log_in_key) VALUES("Jennifer", "Cameron", "0101779671","JenniferCam@yahoo.com", "28803", 716885);
INSERT INTO customer_info (first_name, last_name, phone, email, zip, customer_log_in_key) VALUES("Leslie", "White", "0424447346","LeslieWhi@yahoo.com", "28803", 644434);
INSERT INTO customer_info (first_name, last_name, phone, email, zip, customer_log_in_key) VALUES("Jeffery", "Sarris", "9371447335","JefferySar@gmail.com", "69865", 646118);
INSERT INTO customer_info (first_name, last_name, phone, email, zip, customer_log_in_key) VALUES("Dorothy", "Hayes", "8033470118","DorothyHay@outlook.com", "32801", 587024);
INSERT INTO customer_info (first_name, last_name, phone, email, zip, customer_log_in_key) VALUES("Jeanne", "Robinette", "9440008906","JeanneRob@yahoo.com", "28803", 631609);
INSERT INTO customer_info (first_name, last_name, phone, email, zip, customer_log_in_key) VALUES("Vera", "Watts", "8519885238","VeraWat@yahoo.com", "28803", 095911);
INSERT INTO customer_info (first_name, last_name, phone, email, zip, customer_log_in_key) VALUES("Arlene", "Simmons", "1806429073","ArleneSim@163.com", "81179", 432959);
INSERT INTO customer_info (first_name, last_name, phone, email, zip, customer_log_in_key) VALUES("Julio", "Baines", "1159153234","JulioBai@gmx.com", "45275", 861484);
INSERT INTO customer_info (first_name, last_name, phone, email, zip, customer_log_in_key) VALUES("Zachary", "Samples", "7233353395","ZacharySam@gmail.com", "69865", 056199);
INSERT INTO customer_info (first_name, last_name, phone, email, zip, customer_log_in_key) VALUES("Rickey", "Melanson", "9264858406","RickeyMel@icloud.com", "03597", 183825);
INSERT INTO customer_info (first_name, last_name, phone, email, zip, customer_log_in_key) VALUES("Rebekah", "Snow", "2324894488","RebekahSno@outlook.com", "32801", 712220);
INSERT INTO customer_info (first_name, last_name, phone, email, zip, customer_log_in_key) VALUES("Mark", "Blackman", "8189451580","MarkBla@gmail.com", "69865", 570603);
INSERT INTO customer_info (first_name, last_name, phone, email, zip, customer_log_in_key) VALUES("James", "Byars", "9840977666","JamesBya@gmx.com", "45275", 924640);
INSERT INTO customer_info (first_name, last_name, phone, email, zip, customer_log_in_key) VALUES("Franklin", "Long", "5230562667","FranklinLon@gmx.com", "45275", 711508);
INSERT INTO customer_info (first_name, last_name, phone, email, zip, customer_log_in_key) VALUES("William", "Piller", "7197214860","WilliamPil@zohomail.com", "74544", 213692);

-- redeem points table
INSERT INTO redeem (point) VALUES (100);
INSERT INTO redeem (point) VALUES (50);
INSERT INTO redeem (point) VALUES (30);

-- dish table
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Egg Roll (2)", "1", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Soft Shrimp Spring Roll (2)", "1", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Vegetable Spring Roll (2)", "1", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Gyoza (6) Steamed", "1", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Gyoza (6) Pan Fried", "1", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Crab Puff (6)", "1", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Coconut Shrimp (6)", "1", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Vegetable Tempura", "1", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Edamame", "1", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Soft Shell Crab", "1", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Shrimp Tempura (5)", "1", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Fried Calamari", "1", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Spicy Edamame  whatshot", "1", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Seafood Nuta", "2", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Stuff Jalapeno", "2", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Salmon Jalapeno  whatshot", "2", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Tuna Jalapeno  whatshot", "2", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Yellowtail Jalapeno  whatshot", "2", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Ahi Tower", "2", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Tuna Tar Tar", "2", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Black Pepper Tuna Tataki", "2", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Beef Sashimi (7 pcs)", "2", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Salmon Carpaccio", "2", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Octopus Carpaccio", "2", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Special Scallop", "2", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Hot & Sour Soup  whatshot", "3", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Miso Soup", "3", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Vegetable Soup", "3", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Egg Drop Soup", "3", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Wonton Soup", "3", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("House Wonton Soup", "3", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Green Salad", "3", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Spicy Octopus Salad  whatshot", "3", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Seaweed Salad", "3", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Spicy Kani Salad  whatshot", "3", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Vegetable Fried Rice", "4", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Chicken Fried Rice", "4", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Shrimp Fried Rice", "4", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Beef Fried Rice", "4", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("House Special Fried Rice", "4", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Vegetable Lo Mein", "4", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Chicken Lo Mein", "4", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Beef Lo Mein", "4", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Shrimp Lo Mein", "4", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("House Special Lo Mein", "4", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("House Special Yakiudon", "4", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Singapore Noodle", "4", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Pad Thai Chicken", "4", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Pad Thai Beef", "4", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Pad Thai Shrimp", "4", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Udon Soup", "5", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Tonkatsu Ramen", "5", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Vegetable Delight", "6", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Kung Pao Tofu  whatshot", "6", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Eggplant with Garlic Sauce  whatshot", "6", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Broccoli with Garlic Sauce  whatshot", "6", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Sweet Sour Crispy Chicken", "7", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Vegetable with Chicken", "7", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Vegetable with Beef", "7", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Vegetable with Shrimp", "7", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Vegetable with Scallop", "7", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Broccoli with Chicken", "7", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Broccoli with Beef", "7", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Broccoli with Shrimp", "7", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Broccoli with Scallop", "7", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Garlic Sauce Chicken  whatshot", "7", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Garlic Sauce Beef  whatshot", "7", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Garlic Sauce Shrimp  whatshot", "7", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Garlic Sauce Scallop  whatshot", "7", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Kung Pao Chicken  whatshot", "7", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Kung Pao Beef  whatshot", "7", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Kung Pao Shrimp  whatshot", "7", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Kung Pao Scallop  whatshot", "7", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Mongolian Chicken  whatshot", "7", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Mongolian Beef  whatshot", "7", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Tangy Spicy Chicken  whatshot", "7", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Tangy Spicy Beef  whatshot", "7", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Tangy Spicy Shrimp  whatshot", "7", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Tangy Spicy Scallop  whatshot", "7", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Thai Red Curry Chicken  whatshot", "7", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Thai Red Curry Beef  whatshot", "7", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Thai Red Curry Shrimp  whatshot", "7", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Thai Red Curry Scallop  whatshot", "7", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Thai Yellow Curry Chicken  whatshot", "7", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Thai Yellow Curry Beef  whatshot", "7", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Thai Yellow Curry Shrimp  whatshot", "7", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Thai Yellow Curry Scallop  whatshot", "7", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Thai Green Curry Chicken  whatshot", "7", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Thai Green Curry Beef  whatshot", "7", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Thai Green Curry Shrimp  whatshot", "7", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Thai Green Curry Scallop  whatshot", "7", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Asparagus Style Chicken", "7", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Asparagus Style Beef", "7", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Asparagus Style Shrimp", "7", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Kani Naruta", "8", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Rainbow Naruta", "8", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Spicy Tuna Naruta  whatshot", "8", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Spicy Salmon Naruta  whatshot", "8", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Hibachi Dinner Chicken", "9", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Hibachi Dinner New York Steak", "9", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Shrimp Hibachi Dinner", "9", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Tempura Dinner Shrimp Vege", "9", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Tempura Dinner Chicken Katsu", "9", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Teriyaki Dinner Chicken", "9", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Teriyaki Dinner Steak", "9", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Teriyaki Dinner Shrimp", "9", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Teriyaki Dinner Salmon", "9", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Teriyaki Dinner Scallop", "9", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("General Tso’s Chicken  whatshot", "10", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Orange Chicken  whatshot", "10", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Sesame Chicken", "10", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Orange Beef  whatshot", "10", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Walnut Shrimp", "10", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Mongolian Triple Delight  whatshot", "10", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Triple Delight in Brown Sauce", "10", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Salt & Pepper Shrimp  whatshot", "10", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Dragon & Phoenix", "10", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Happy Family", "10", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Treasure of the Sea", "10", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Thai Basil Chicken  whatshot", "10", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Thai Basil Beef  whatshot", "10", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Double Delight in Bird Nest", "10", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Cumin Beef  whatshot", "10", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Volcano Style Chicken  whatshot", "10", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Volcano Style Beef  whatshot", "10", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Volcano Style Shrimp  whatshot", "10", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Unagi Don", "11", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Vegetarian Combo", "11", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Sashimi Deluxe", "11", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Sushi Combo A", "11", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Sushi Combo B", "11", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Chirashi", "11", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Roll Combo", "11", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Sushi Boat (For 2)", "11", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Art of Maki", "12", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Big Jason Roll", "12", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Bobby Roll", "12", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Cowboy Roll", "12", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Chicken Katsu Roll", "12", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Crunch Roll", "12", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Caterpillar Roll", "12", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Florida Roll", "12", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Fuji Volcano Roll", "12", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Geisha Roll", "12", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Green Dragon Roll", "12", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Hot Mama Roll", "12", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Hokkaido Roll  whatshot", "12", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Lobster Lover Roll", "12", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Lava Roll", "12", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Monster Roll", "12", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Mango Roll", "12", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Memorial Roll", "12", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Nemo Roll", "12", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("New Orleans Roll  whatshot", "12", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("New York Roll  whatshot", "12", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Orange Dragon", "12", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Pink Lady Roll", "12", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Phoenix Roll", "12", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Red Dragon Roll  whatshot", "12", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Rainbow Roll", "12", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Sexy Lady Roll  whatshot", "12", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Sweet Heart Roll", "12", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Shaggy Dog Roll", "12", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("SM Roll  whatshot", "12", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Sumac Roll", "12", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Skydiver Roll", "12", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Scorpion Roll  whatshot", "12", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Snow White Roll  whatshot", "12", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Summer Roll  whatshot", "12", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Sumo Roll", "12", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Tiger Roll", "12", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Texans Roll", "12", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Tuna Special Roll  whatshot", "12", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Volcano Roll  whatshot", "12", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Wasabi Special Roll  whatshot", "12", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Rolls (Maki)/Hand Roll(Temaki)", "13", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Eel Avocado", "13", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Shrimp & Avocado", "13", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Spicy Salmon  whatshot", "13", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Salmon", "13", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Yellowtail Scallion", "13", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Spicy Tuna  whatshot", "13", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Tuna", "13", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Spicy Yellowtail  whatshot", "13", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Spicy Scallop  whatshot", "13", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("California", "13", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Philadelphia", "13", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Boston", "13", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Spider", "13", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Spicy Shrimp  whatshot", "13", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Cucumber & Avocado", "13", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Shrimp Tempura", "13", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Rock &", "13", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Sushi/Sashimi", "14", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Tuna/Maguro", "14", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("White Tuna/Shiro Maguro", "14", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Pepper Tuna", "14", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Salmon/Sake", "14", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Smoked Salmon/Kunsei Sake", "14", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Red Snapper/Tai", "14", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Sea Bass/Suzuki", "14", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Yellowtail/Hamachi", "14", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Mackerel/Saba", "14", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Squid/Ika", "14", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Octopus/Tako", "14", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Shrimp/Ebi", "14", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Sweet Shrimp", "14", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Alaskan King Crab/Tarabakani", "14", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Crab Stick/Kani-Kama", "14", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Surf Clam", "14", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Spicy Scallop/Hotategai  whatshot", "14", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Fresh Water Eel/Unagi", "14", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Flying Fish Egg/Tobiko", "14", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Salmon Roe/Ikura", "14", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Smelt Egg/Masago", "14", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Tamago/Sweet Egg", "14", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Kids Chicken Lo Mein", "14", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Kids Chicken Fried Rice", "14", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Kids Japanese Udon", "14", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Kids Nugget &French Fries", "14", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Chinese Lunch Speical", "15", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Sauteed Vegetable (Lunch)", "15", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Sweet & Sour Chicken (Lunch)", "15", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("General Taos Chicken (Lunch)", "15", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Sesame Chicken (Lunch)", "15", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Orange Chicken (Lunch)", "15", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Kung Pao Chicken (Lunch)", "15", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Kung Pao Beef (Lunch)", "15", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Kung Pao Shrimp (Lunch)", "15", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Kung Pao Tofu (Lunch)", "15", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Garlic Sauce Chicken (Lunch)", "15", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Garlic Sauce Beef (Lunch)", "15", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Garlic Sauce Shrimp (Lunch)", "15", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Vegetable Chicken (Lunch)", "15", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Vegetable Beef (Lunch)", "15", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Vegetable Shrimp (Lunch)", "15", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Broccoli Chicken (Lunch)", "15", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Broccoli Beef (Lunch)", "15", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Broccoli Shrimp (Lunch)", "15", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Pepper Steak Chicken (Lunch)", "15", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Pepper Steak Beef (Lunch)", "15", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Pepper Steak Shrimp (Lunch)", "15", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Tangy Spicy Chicken (Lunch)", "15", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Tangy Spicy Beef (Lunch)", "15", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Tangy Spicy Shrimp (Lunch)", "15", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Hunan Chicken (Lunch)", "15", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Hunan Beef (Lunch)", "15", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Hunan Shrimp (Lunch)", "15", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Szechuan Style Chicken (Lunch)", "15", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Szechuan Style Beef (Lunch)", "15", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Japnese Lunch Bento Box", "16", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Chicken Katsu (Lunch Bento Box)", "16", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Hibachi Chicken (Lunch Bento Box)", "16", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Hibachi Steak (Lunch Bento Box)", "16", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Chicken Teriyaki (Lunch Bento Box)", "16", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Salmon Teriyaki (Lunch Bento Box)", "16", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Red Snapper Teriyaki (Lunch Bento Box)", "16", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Any 2 Rolls (Lunch)", "17", 1);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Sushi Lunch (6 Pcs Sushi) (Lunch)", "18", 3);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Sushi Lunch (10 Pcs Sushi) (Lunch)", "18", 2);
INSERT INTO dish (dish_name, dish_category_id, redeem_id) VALUES ("Sushi Lunch (12 Pcs Sushi) (Lunch)", "18", 2);


-- rating table
INSERT INTO rating(r_category) VALUES ('Strongly Satisfied');
INSERT INTO rating(r_category) VALUES ('Satisfied');
INSERT INTO rating(r_category) VALUES ('Neutral');
INSERT INTO rating(r_category) VALUES ('Dissatisfied');
INSERT INTO rating(r_category) VALUES ('Strongly Dissatisfied');

-- Service review questions
INSERT INTO service_review_question(service_question) VALUES('please enter the server id who served your table');
INSERT INTO service_review_question(service_question) VALUES('Were you satisfied with the order Accuracy?');
INSERT INTO service_review_question(service_question) VALUES('Were you satisified with the speed of service?');
INSERT INTO service_review_question(service_question) VALUES('Were you satisified with the service quality?');
INSERT INTO service_review_question(service_question) VALUES('Were you satisifed with the staff service?');
SELECT * FROM service_review_question;

-- service review
INSERT INTO service_review(service_review_question_id, rating_id, emp_id, customer_id)
VALUES(1, null, 5, 1);
INSERT INTO service_review(service_review_question_id, rating_id, emp_id, customer_id)
VALUES(2, 5, null, 1);
INSERT INTO service_review(service_review_question_id, rating_id, emp_id, customer_id)
VALUES(3, 1, null, 1);
INSERT INTO service_review(service_review_question_id, rating_id, emp_id, customer_id)
VALUES(4, 2, null, 1);
INSERT INTO service_review(service_review_question_id, rating_id, emp_id, customer_id)
VALUES(5, 3, null, 1);
INSERT INTO service_review(service_review_question_id, rating_id, emp_id, customer_id)
VALUES(1, null, 5, 2);
INSERT INTO service_review(service_review_question_id, rating_id, emp_id, customer_id)
VALUES(2, 5, null, 2);
INSERT INTO service_review(service_review_question_id, rating_id, emp_id, customer_id)
VALUES(3, 1, null, 2);
INSERT INTO service_review(service_review_question_id, rating_id, emp_id, customer_id)
VALUES(4, 2, null, 2);
INSERT INTO service_review(service_review_question_id, rating_id, emp_id, customer_id)
VALUES(5, 3, null, 2);

-- environment_review_question
INSERT INTO environment_review_question(env_question) VALUES ('Were you satifised with the cleanliness of the resturant');
INSERT INTO environment_review_question(env_question) VALUES ('Were you satisfied with the ambiance of the resturant');

-- environment_review
INSERT INTO environment_review(environment_review_question_id, rating_id, customer_id) VALUES(1, 1, 1);
INSERT INTO environment_review(environment_review_question_id, rating_id, customer_id) VALUES(2, 1, 1);
INSERT INTO environment_review(environment_review_question_id, rating_id, customer_id) VALUES(1, 1, 2);
INSERT INTO environment_review(environment_review_question_id, rating_id, customer_id) VALUES(2, 1, 2);
INSERT INTO environment_review(environment_review_question_id, rating_id, customer_id) VALUES(1, 1, 3);
INSERT INTO environment_review(environment_review_question_id, rating_id, customer_id) VALUES(2, 1, 3);
INSERT INTO environment_review(environment_review_question_id, rating_id, customer_id) VALUES(1, 1, 4);
INSERT INTO environment_review(environment_review_question_id, rating_id, customer_id) VALUES(2, 1, 4);
INSERT INTO environment_review(environment_review_question_id, rating_id, customer_id) VALUES(1, 1, 5);
INSERT INTO environment_review(environment_review_question_id, rating_id, customer_id) VALUES(2, 1, 5);
INSERT INTO environment_review(environment_review_question_id, rating_id, customer_id) VALUES(1, 1, 6);
INSERT INTO environment_review(environment_review_question_id, rating_id, customer_id) VALUES(2, 1, 6);
INSERT INTO environment_review(environment_review_question_id, rating_id, customer_id) VALUES(1, 1, 7);
INSERT INTO environment_review(environment_review_question_id, rating_id, customer_id) VALUES(2, 1, 7);
INSERT INTO environment_review(environment_review_question_id, rating_id, customer_id) VALUES(1, 1, 8);
INSERT INTO environment_review(environment_review_question_id, rating_id, customer_id) VALUES(2, 1, 8);

-- dish_review_question
INSERT INTO dish_review_question(dish_question) VALUES ('Were you satifised with the food quality');
INSERT INTO dish_review_question(dish_question) VALUES ('Which is your fav dish');

-- dish review 
INSERT INTO dish_review(dish_review_question_id, rating_id, dish_id, customer_id) VALUES (1, null, 1, 1);
INSERT INTO dish_review(dish_review_question_id, rating_id, dish_id, customer_id) VALUES (1, 1, null, 1);
INSERT INTO dish_review(dish_review_question_id, rating_id, dish_id, customer_id) VALUES (1, null, 10, 2);
INSERT INTO dish_review(dish_review_question_id, rating_id, dish_id, customer_id) VALUES (1, 2, null, 2);
INSERT INTO dish_review(dish_review_question_id, rating_id, dish_id, customer_id) VALUES (1, null, 11, 3);
INSERT INTO dish_review(dish_review_question_id, rating_id, dish_id, customer_id) VALUES (1, 3, null, 3);
INSERT INTO dish_review(dish_review_question_id, rating_id, dish_id, customer_id) VALUES (1, null, 15, 4);
INSERT INTO dish_review(dish_review_question_id, rating_id, dish_id, customer_id) VALUES (1, 4, null, 4);
INSERT INTO dish_review(dish_review_question_id, rating_id, dish_id, customer_id) VALUES (1, null, 2, 5);
INSERT INTO dish_review(dish_review_question_id, rating_id, dish_id, customer_id) VALUES (1, 1, null, 5);
INSERT INTO dish_review(dish_review_question_id, rating_id, dish_id, customer_id) VALUES (1, null, 3, 6);
INSERT INTO dish_review(dish_review_question_id, rating_id, dish_id, customer_id) VALUES (1, 2, null, 6);
INSERT INTO dish_review(dish_review_question_id, rating_id, dish_id, customer_id) VALUES (1, null, 4, 7);
INSERT INTO dish_review(dish_review_question_id, rating_id, dish_id, customer_id) VALUES (1, 3, null, 7);
INSERT INTO dish_review(dish_review_question_id, rating_id, dish_id, customer_id) VALUES (1, null, 5, 8);
INSERT INTO dish_review(dish_review_question_id, rating_id, dish_id, customer_id) VALUES (1, 1, null, 8);
INSERT INTO dish_review(dish_review_question_id, rating_id, dish_id, customer_id) VALUES (1, null, 6, 9);
INSERT INTO dish_review(dish_review_question_id, rating_id, dish_id, customer_id) VALUES (1, 1, null, 9);

-- reward 
INSERT INTO reward(reward_category, r_point) VALUES('long', 50);
INSERT INTO reward(reward_category, r_point) VALUES('short', 20);

-- customer point
INSERT INTO customer_point(customer_id, reward_id) VALUES(1, 1);
INSERT INTO customer_point(customer_id, reward_id) VALUES(2,2);
INSERT INTO customer_point(customer_id, reward_id) VALUES(3,2);
INSERT INTO customer_point(customer_id, reward_id) VALUES(4,1);
INSERT INTO customer_point(customer_id, reward_id) VALUES(5,2);
INSERT INTO customer_point(customer_id, reward_id) VALUES(6,1);

-- short_review_question
INSERT INTO short_review_question(short_question) VALUES('were you satisified with the services');

-- customer_short_review
INSERT INTO customer_short_review(short_review_id, rating_id, customer_id) VALUES (1, 1, 1);
INSERT INTO customer_short_review(short_review_id, rating_id, customer_id) VALUES (1, 1, 2);
INSERT INTO customer_short_review(short_review_id, rating_id, customer_id) VALUES (1, 1, 3);
INSERT INTO customer_short_review(short_review_id, rating_id, customer_id) VALUES (1, 1, 4);
INSERT INTO customer_short_review(short_review_id, rating_id, customer_id) VALUES (1, 1, 5);
INSERT INTO customer_short_review(short_review_id, rating_id, customer_id) VALUES (1, 1, 6);
INSERT INTO customer_short_review(short_review_id, rating_id, customer_id) VALUES (1, 1, 7);
INSERT INTO customer_short_review(short_review_id, rating_id, customer_id) VALUES (1, 1, 8);
INSERT INTO customer_short_review(short_review_id, rating_id, customer_id) VALUES (1, 1, 9);
INSERT INTO customer_short_review(short_review_id, rating_id, customer_id) VALUES (1, 1, 10);

-- employee reply
INSERT INTO employee_reply(emp_id, customer_id, responses) 
VALUES (2, 1, 'thank you for reply have a nice day');
INSERT INTO employee_reply(emp_id, customer_id, responses) 
VALUES (2, 2, 'thank you for reply have a nice day');
INSERT INTO employee_reply(emp_id, customer_id, responses) 
VALUES (2, 3, 'thank you for reply have a nice day');
INSERT INTO employee_reply(emp_id, customer_id, responses) 
VALUES (2, 4, 'thank you for reply have a nice day');
INSERT INTO employee_reply(emp_id, customer_id, responses) 
VALUES (2, 5, 'thank you for reply have a nice day');
INSERT INTO employee_reply(emp_id, customer_id, responses) 
VALUES (2, 6, 'thank you for reply have a nice day');

-- customer_redeem
INSERT INTO customer_redeem(customer_id, dish_id) VALUES (1, 2);
INSERT INTO customer_redeem(customer_id, dish_id) VALUES (2, 7);
INSERT INTO customer_redeem(customer_id, dish_id) VALUES (3, 18);
INSERT INTO customer_redeem(customer_id, dish_id) VALUES (4, 5);
INSERT INTO customer_redeem(customer_id, dish_id) VALUES (5, 6);
INSERT INTO customer_redeem(customer_id, dish_id) VALUES (6, 29);
INSERT INTO customer_redeem(customer_id, dish_id) VALUES (7, 8);
INSERT INTO customer_redeem(customer_id, dish_id) VALUES (8, 9);
INSERT INTO customer_redeem(customer_id, dish_id) VALUES (9, 30);
INSERT INTO customer_redeem(customer_id, dish_id) VALUES (10, 11);
INSERT INTO customer_redeem(customer_id, dish_id) VALUES (11, 12);
INSERT INTO customer_redeem(customer_id, dish_id) VALUES (12, 20);

-- SELECT * FROM service_review;
-- SELECT b.service_question, e.r_category, c.first_name, c.last_name, a.date_time
-- FROM service_review as a
-- JOIN service_review_question as b
-- ON a.service_review_question_id = b.service_review_question_id
-- JOIN rating as e
-- ON a.rating_id = e.rating_id
-- JOIN customer_info c
-- ON a.customer_id = c.customer_id
-- ORDER BY c.first_name