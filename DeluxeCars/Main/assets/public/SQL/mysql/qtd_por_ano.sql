SELECT
    YEAR(ano_fabricado) AS ano,
    COUNT(*) AS total_carros
FROM
    dcdb.carros
WHERE
    YEAR(ano_fabricado) = 2023
GROUP BY
    YEAR(ano_fabricado);