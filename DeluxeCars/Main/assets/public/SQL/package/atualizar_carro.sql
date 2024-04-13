DELIMITER $ $ 

CREATE PROCEDURE atualizar_carro(
    IN p_ano_fabricado date,
    IN p_chassi VARCHAR(50),
    IN p_placa VARCHAR(20),
    IN p_modelo VARCHAR(100)
) BEGIN
UPDATE
    dcdb.carros
SET
    carros.ano_fabricado = p_ano_fabricado,
    carros.placa = p_placa,
    carros.modelo = p_modelo
WHERE
    carros.chassi = p_chassi;

END $ $ DELIMITER;

-- select
--     *
-- from                             --visualização
--     dcdb.carros
-- where
--     chassi = p_chassi