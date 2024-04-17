SELECT
    m.modelo,
    COUNT(DISTINCT c.chassi) AS total_carros
FROM
    dcdb.carros m
    LEFT JOIN dcdbcarros c ON m.modelo = c.modelo
GROUP BY
    m.modelo;