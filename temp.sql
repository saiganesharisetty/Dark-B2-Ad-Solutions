SELECT  name + '(' + LEFT(occupation,1)+ ')'
FROM occupations
ORDER BY name
SELECT  'There are a total of' + ' ' + CAST(COUNT(occupation) AS varchar(5)) + ' ' + (CASE WHEN occupation = "Doctor" THEN "doctors." WHEN occupation = "Actor" THEN "actors." WHEN occupation = "Singer" THEN "singers." WHEN occupation = "Professor" THEN "professors." ELSE null END)
FROM occupations
GROUP BY  occupation
ORDER BY  COUNT(occupation)
         ,occupation

WITH RankedOccupations AS 
    (SELECT Name,
         Occupation,
         ROW_NUMBER()
        OVER (PARTITION BY Occupation
    ORDER BY  Name) AS rn
    FROM OCCUPATIONS )
SELECT MAX(CASE
    WHEN Occupation = 'Doctor' THEN
    Name END) AS Doctor, MAX(CASE
    WHEN Occupation = 'Professor' THEN
    Name END) AS Professor, MAX(CASE
    WHEN Occupation = 'Singer' THEN
    Name END) AS Singer, MAX(CASE
    WHEN Occupation = 'Actor' THEN
    Name END) AS Actor
FROM RankedOccupations
GROUP BY  rn
ORDER BY  rn;