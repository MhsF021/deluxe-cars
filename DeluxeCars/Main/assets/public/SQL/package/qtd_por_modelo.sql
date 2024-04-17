DELIMITER $ $

CREATE PROCEDURE qtd_por_modelo() BEGIN
SELECT
    carros.modelo,
    COUNT(*) AS total_carros
FROM
    dcdb.carros
GROUP BY
    carros.modelo;

END $ $ DELIMITER;