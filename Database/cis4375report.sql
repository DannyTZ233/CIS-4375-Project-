USE cis4375db;

-- employees report
SELECT 
e.e_first_name, e.e_last_name, e.e_phone, e.join_date, e.quit_date, e.e_comment,
s.s_name, jt.jt_category, eq.eq_category
FROM 
employee as e
JOIN store as s
ON e.store_id = s.store_id
JOIN job_title as jt
ON e.job_title_id = jt.job_title_id
LEFT JOIN employee_quit as eq
ON e.employee_quit_id = eq.employee_quit_id;

-- employees report by employee id 
SELECT 
e.emp_id, e.e_first_name, e.e_last_name, e.e_phone, e.join_date, e.quit_date, e.e_comment,
s.s_name, jt.jt_category, eq.eq_category
FROM 
employee as e
JOIN store as s
ON e.store_id = s.store_id
JOIN job_title as jt
ON e.job_title_id = jt.job_title_id
LEFT JOIN employee_quit as eq
ON e.employee_quit_id = eq.employee_quit_id
WHERE e.emp_id = 1;

-- employee scheudle reports 
SELECT e.emp_id, e.e_first_name, e.e_last_name, jt.jt_category,
eci.eci_category, eco.eco_category, el.el_category,
es.log_datetime
FROM employee_schedule as es
LEFT JOIN employee_check_in as eci
ON es.check_in_id = eci.check_in_id
LEFT JOIN employee_check_out as eco
ON es.check_out_id = eco.check_out_id
JOIN employee as e
ON es.emp_id = e.emp_id
LEFT JOIN employee_leave as el
ON es.leave_id = el.leave_id
JOIN job_title as jt
ON e.job_title_id = jt.job_title_id;

# customer point total by customer_id
SELECT cp.customer_id, ci.first_name, ci.last_name
, SUM(r.r_point)
FROM customer_point as cp
JOIN customer_info as ci
ON cp.customer_id = ci.customer_id
JOIN reward as r
ON cp.reward_id = r.reward_id 
GROUP BY cp.customer_id, ci.first_name, ci.last_name
HAVING cp.customer_id = 1;

# customer redeem 
SELECT c.first_name, c.last_name, d.dish_name, r.point,
cr.redeem_date
FROM customer_redeem as cr
JOIN customer_info as c
ON cr.customer_id = c.customer_id 
JOIN dish as d
ON cr.dish_id = d.dish_id 
JOIN redeem as r 
ON d.redeem_id = r.redeem_id;

# customer short review report 
SELECT ci.customer_id, ci.first_name, ci.last_name,
srq.short_question, r.r_category, csr.comment, csr.date_time
FROM customer_short_review as csr
JOIN short_review_question as srq
ON csr.short_review_id = srq.short_review_id 
JOIN rating as r
ON csr.rating_id = r.rating_id 
JOIN customer_info as ci
ON csr.customer_id = ci.customer_id
WHERE ci.customer_id = 2;

# dish review 
SELECT ci.customer_id, ci.first_name, ci.last_name,
drq.dish_question, r.r_category, d.dish_name, dr.date_time
FROM dish_review as dr
JOIN dish_review_question as drq
ON dr.dish_review_question_id = drq.dish_review_question_id
JOIN rating as r
ON dr.rating_id = r.rating_id 
LEFT JOIN dish as d
ON dr.dish_id = d.dish_id
JOIN customer_info as ci
ON dr.customer_id = ci.customer_id;

# dish 
SELECT d.dish_name, dc.dish_category, r.point
FROM dish d
JOIN dish_category as dc 
ON d.dish_category_id = dc.dish_category_id
JOIN redeem as r
ON d.redeem_id = r.redeem_id;

# employee reply 
SELECT e.emp_id, e.e_first_name, e.e_last_name,
ci.first_name c_first, ci.last_name c_last, er.responses, er.date_time
FROM employee_reply as er
JOIN employee as e
ON er.emp_id = e.emp_id
JOIN customer_info as ci
ON er.customer_id = ci.customer_id;

# env review 
SELECT ci.customer_id, ci.first_name, ci.last_name,
erq.env_question, r.r_category, er.date_time
FROM environment_review as er
JOIN environment_review_question as erq
ON er.environment_review_question_id = erq.environment_review_question_id
JOIN rating as r
ON er.rating_id = r.rating_id
JOIN customer_info as ci
ON er.customer_id = ci.customer_id 
ORDER BY ci.customer_id;

# service review
SELECT ci.customer_id, ci.first_name, ci.last_name,
srq.service_question, r.r_category, e.e_first_name,
e.e_last_name, e.emp_id, sr.date_time
FROM service_review as sr
JOIN service_review_question as srq
ON sr.service_review_question_id = srq.service_review_question_id
JOIN rating as r 
ON sr.rating_id = r.rating_id 
JOIN customer_info as ci
ON sr.customer_id = ci.customer_id 
LEFT JOIN employee as e
ON sr.emp_id = e.emp_id 
ORDER BY ci.customer_id;

# login 
SELECT * FROM employee_login
WHERE emp_id = 1 AND password = '123456';

