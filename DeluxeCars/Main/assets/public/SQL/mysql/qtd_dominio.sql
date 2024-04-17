SELECT
    SUBSTRING_INDEX(email, '@', -1) AS dominio_email,
    COUNT(*) AS total_usuarios
FROM
    dcdb.usuarios
GROUP BY
    dominio_email;