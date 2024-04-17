UPDATE
    dcdb.usuarios
SET
    usuarios.name = ?,
    usuarios.updatedAt = ?
WHERE
    user = ?

-- Os valores são criados de acordo com os parâmetros (informações/dados)
-- inseridos no formulário pelo usuário