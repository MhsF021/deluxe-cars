DELIMITER $ $

CREATE PROCEDURE buscar_por_chassi(IN c_chassi VARCHAR(20)) BEGIN
SELECT
    *
FROM
    dcdb.carros
WHERE
    carros.chassi = c_chassi;

END $ $ DELIMITER;