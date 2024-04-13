INSERT INTO
    dcdb.usuarios (
        usuarios.name,
        usuarios.user,
        usuarios.email,
        usuarios.password,
        usuarios.createdAt,
        usuarios.updatedAt
    )
VALUES
    (?, ?, ?, ?, ?, ?)

-- Os valores são criados de acordo com os parâmetros (informações/dados)
-- inseridos no formulário pelo usuário