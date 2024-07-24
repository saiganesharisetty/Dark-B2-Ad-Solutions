SELECT  name + '(' + LEFT(occupation,1)+ ')'
FROM occupations
ORDER BY name
SELECT  'There are a total of' + ' ' + CAST(COUNT(occupation) AS varchar(5)) + ' ' + (CASE WHEN occupation = "Doctor" THEN "doctors." WHEN occupation = "Actor" THEN "actors." WHEN occupation = "Singer" THEN "singers." WHEN occupation = "Professor" THEN "professors." ELSE null END)
FROM occupations
GROUP BY  occupation
ORDER BY  COUNT(occupation)
         ,occupation