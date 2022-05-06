USE cis4375db;

USE cis4375db;


-- store
INSERT INTO store(s_name, address) VALUES ('Wasabi Bistro', 'wasabi street Conroe, TX');

-- employee
INSERT INTO employee(e_first_name, e_last_name, e_phone, e_email, job_title, store_id, join_date)
VALUES ('Nikita', 'Forsythe', "432-234-1234", "nfor@me.com", "Manager", 1, '2018-02-02');
INSERT INTO employee(e_first_name, e_last_name, e_phone, e_email, job_title, store_id, join_date)
VALUES ("Alan", "Guo", "555-253-2342", "asao@gmail.com", "Manager", 1, '2018-02-02');
INSERT INTO employee(e_first_name, e_last_name, e_phone, e_email, job_title, store_id, join_date)
VALUES ( "Jonah", "Kim", "534-235-6345", "jkim@gmail.com", "Waiter", 1, '2018-02-02');
INSERT INTO employee(e_first_name, e_last_name, e_phone, e_email, job_title, store_id, join_date)
VALUES ("Jackson", "Wang", "323-123-4132", "jwang@gmail.com", "Waiter", 1, '2018-02-02');
INSERT INTO employee(e_first_name, e_last_name, e_phone, e_email, job_title, store_id, join_date)
VALUES ("John", "Smith", "933-999-2900", "johns@gmail.com", "Sushi Cook", 1, '2019-03-20');
INSERT INTO employee(e_first_name, e_last_name, e_phone, e_email, job_title, store_id, join_date)
VALUES ( "Zhan", "Xiao", "444-444-4444", "xz@gmail.com", "Sushi Cook", 1, '2019-03-20');
INSERT INTO employee(e_first_name, e_last_name, e_phone, e_email, job_title, store_id, join_date)
VALUES ("Mary", "Jane", "303-444-4444", "mjane@gmail.com", "Cook", 1, '2019-03-20');
INSERT INTO employee(e_first_name, e_last_name, e_phone, e_email, job_title, store_id, join_date)
VALUES ("Qing", "Zhao", "713-444-2343", "qingzhao@me.com", "Cook", 1, '2019-03-20');
INSERT INTO employee(e_first_name, e_last_name, e_phone, e_email, job_title, store_id, join_date)
VALUES ( "Ying", "Chan", "281-253-2345", "ychan@yahoo.com", "Dish Washer", 1, '2019-06-20');
INSERT INTO employee(e_first_name, e_last_name, e_phone, e_email, job_title, store_id, join_date)
VALUES ("Nina", "Smith", "555-634-6345", "nsmith@gmail.com", "Hostess", 1, '2019-06-20');
INSERT INTO employee(e_first_name, e_last_name, e_phone, e_email, job_title, store_id, join_date)
VALUES ("Luna", "Lovegood", "243-124-2342", "llgood@gmail.com", "Waiter", 1, '2019-06-20');
INSERT INTO employee(e_first_name, e_last_name, e_phone, e_email, job_title, store_id, join_date)
VALUES ("Zuko", "Ozaison", "832-634-6345", "zuko2@gmail.com", "Chef", 1, '2019-06-20');

-- employee login
INSERT INTO employee_login(emp_id, password) VALUES (1, '123456');

-- customer survey
INSERT INTO customer_survey(zip_code, service_rating, environment_rating, food_rating, over_all_rating, sur_comment)
VALUES ('77301', 3, 4, 5, 5, 'This is a great place to eat! Lots of options! So far everything has been good! I really enjoy their hot and sour soup. The Places small, quiet and the staff is very friendly');
INSERT INTO customer_survey(zip_code, service_rating, environment_rating, food_rating, over_all_rating, sur_comment)
VALUES ('77301', 4, 3, 4, 4, 'Ive had sushi all over the country, and surprisingly this fish was so fresh and the rolls were incredibly well made.');
INSERT INTO customer_survey(zip_code, service_rating, environment_rating, food_rating, over_all_rating, sur_comment)
VALUES ('77301', 3, 2, 5, 5, 'The server was nice and friendly. The apple sake we had was delicious. And the sushi was hot out of the kitchen. The monster roll was our favorite.');
INSERT INTO customer_survey(zip_code, service_rating, environment_rating, food_rating, over_all_rating, sur_comment)
VALUES ('77301', 2, 1, 4, 5, 'I have been wanting to try Kani salad and I really enjoyed it. Wish they offered different sizes!');
INSERT INTO customer_survey(zip_code, service_rating, environment_rating, food_rating, over_all_rating, sur_comment)
VALUES ('77301', 1, 3, 5, 4, 'The food here is excellent and the service is super quick. The staff is also very friendly. They have a ton to choose from on the menu, including many types of sushi.');
INSERT INTO customer_survey(zip_code, service_rating, environment_rating, food_rating, over_all_rating, sur_comment)
VALUES ('77305', 3, 5, 5, 5, 'This place is definitely a hidden treasure! The pricing here is VERY fair, and the food was so good me and my husband literally had to force ourselves to stop. Definitely reccomend!');
INSERT INTO customer_survey(zip_code, service_rating, environment_rating, food_rating, over_all_rating, sur_comment)
VALUES ('77305', 4, 5, 2, 4, 'I always enjoy this little place. The best hot n sour soup in town. The Mongolian plate is always my go to.  It was packed tonight and our server was attentive.');
INSERT INTO customer_survey(zip_code, service_rating, environment_rating, food_rating, over_all_rating, sur_comment)
VALUES ('77384', 3, 3, 5, 5, 'Sushi is amazing here. Their staff is wonderful and quick. This is definitely a regular spot for us when we are craving Asian food.');
INSERT INTO customer_survey(zip_code, service_rating, environment_rating, food_rating, over_all_rating, sur_comment)
VALUES ('77384', 2, 2, 3, 5, 'Amazing service. Amazing food. Fresh. I believe I got the vegetable with beef and steamed rice. Very flavorful. I recommend this dish.');
INSERT INTO customer_survey(zip_code, service_rating, environment_rating, food_rating, over_all_rating, sur_comment)
VALUES ('77384', 4, 3, 4, 4, 'This is now my "go to" sushi restaurant.  After five visits with perfect dining experiences; Ive found a winner!');
INSERT INTO customer_survey(zip_code, service_rating, environment_rating, food_rating, over_all_rating, sur_comment)
VALUES ('77384', 5, 3, 5, 4, 'friendly customer service and great food, this is our go-to for noodles and sushi');
INSERT INTO customer_survey(zip_code, service_rating, environment_rating, food_rating, over_all_rating, sur_comment)
VALUES ('77384', 3, 5, 5, 5, 'This place was wonderful, each meal was absolutely delicious, and the options between either Chinese or Japanese dishes gave quite the selection');
INSERT INTO customer_survey(zip_code, service_rating, environment_rating, food_rating, over_all_rating, sur_comment)
VALUES ('77384', 4, 5, 2, 4, 'Really great sushi; a completely unexpected gem. We normally head into Houston for good sushi but this was as good or better than anything we have had recently.');
INSERT INTO customer_survey(zip_code, service_rating, environment_rating, food_rating, over_all_rating, sur_comment)
VALUES ('77384', 3, 3, 5, 4, 'Always consistent! Great food and usually can get in and out in less than an hour with 4 of us eating.');
INSERT INTO customer_survey(zip_code, service_rating, environment_rating, food_rating, over_all_rating, sur_comment)
VALUES ('77384', 5, 3, 3, 5, 'Always a good choice. Very yummy menu with a wide range of Asian cuisine.');
INSERT INTO customer_survey(zip_code, service_rating, environment_rating, food_rating, over_all_rating, sur_comment)
VALUES ('77385', 2, 3, 3, 5, 'nice services, and friendly staffs food is also good');
INSERT INTO customer_survey(zip_code, service_rating, environment_rating, food_rating, over_all_rating, sur_comment)
VALUES ('77385', 4, 3, 2, 4, 'nice services, and friendly staffs food is also good');
INSERT INTO customer_survey(zip_code, service_rating, environment_rating, food_rating, over_all_rating, sur_comment)
VALUES ('77385', 5, 3, 5, 3, 'I got the general taos chicken with white rice and I loved how crispy it was! Definitely want to come back and try more.');
INSERT INTO customer_survey(zip_code, service_rating, environment_rating, food_rating, over_all_rating, sur_comment)
VALUES ('77385', 3, 5, 4, 4, 'Small and chilled out. Never had to ask for a refill. Food was great! Kinda packed sushi heavy on the fish, but still great none the less. Would come here again and again.');
INSERT INTO customer_survey(zip_code, service_rating, environment_rating, food_rating, over_all_rating, sur_comment)
VALUES ('77385', 4, 5, 3, 4, 'Pad Thai was delicious! The service was phenomenal. We can’t wait to return!');
INSERT INTO customer_survey(zip_code, service_rating, environment_rating, food_rating, over_all_rating, sur_comment)
VALUES ('77385', 3, 3, 5, 4, 'Favorites are eggplant in garlic sauce and house wonton. Call in your order or order konline, generally ready in the time promised');
INSERT INTO customer_survey(zip_code, service_rating, environment_rating, food_rating, over_all_rating, sur_comment)
VALUES ('77385', 5, 4, 4, 5, 'Great food, outstanding service.  Warm welcoming place, definitely a best asian restaurant in town and truly recommended.');
INSERT INTO customer_survey(zip_code, service_rating, environment_rating, food_rating, over_all_rating, sur_comment)
VALUES ('77385', 2, 4, 5, 5, 'Was there last night with my friend Really nice Tonkatsu Ramen and Shrimp Spring roll for sure will be back');
