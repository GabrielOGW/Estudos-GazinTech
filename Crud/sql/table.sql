CREATE TABLE
    pessoa (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        data_nascimento DATE NOT NULL,
        idade INT,
        cargo VARCHAR(255)
    );