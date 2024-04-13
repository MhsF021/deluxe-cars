SELECT name,
usuarios.user,
usuarios.email,
usuarios.password,
usuarios.createdAt,
usuarios.updatedAt
FROM
    dcdb.usuarios AS usuarios
WHERE
    usuarios.user = 'Milla123'
    AND usuarios.password = '123321'