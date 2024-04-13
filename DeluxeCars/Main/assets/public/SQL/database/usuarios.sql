CREATE TABLE dcdb.usuarios (
    nome VARCHAR(150) NOT NULL,
    usuario INT NOT NULL,
    dtnasc DATE NOT NULL,
    senha VARCHAR(150) BINARY NOT NULL,
    PRIMARY KEY (usuario),
    UNIQUE INDEX senha_UNIQUE (senha ASC) VISIBLE
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;