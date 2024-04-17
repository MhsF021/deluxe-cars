DELIMITER $ $ 

CREATE PROCEDURE listar_por_ano(IN p_ano year) BEGIN
SELECT
    *
FROM
    dcdb.carros
WHERE
    YEAR (carros.ano_fabricado) = p_ano;

END $ $ DELIMITER;