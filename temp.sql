SELECT 
    AVG(salary) - (SELECT AVG(CAST(REPLACE(CAST(salary AS CHAR), '0', '') AS DECIMAL)) FROM employees) AS salary_difference
FROM 
    employees;

    select avg(salary)-(select avg(CAST(REPLACE(CAST(salary AS CHAR),'0','') AS DECIMAL)) from employees) from employees;
