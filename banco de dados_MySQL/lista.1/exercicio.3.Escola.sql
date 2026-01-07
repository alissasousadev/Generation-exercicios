/*
1. Crie um banco de dados para um registro de uma escola, onde o sistema trabalhará com as informações dos estudantes deste registro dessa escola.  
2. Crie uma tabela estudantes e utilizando a habilidade de abstração e determine 5 atributos relevantes dos estudantes para se trabalhar com o serviço dessa escola. 
3. Insira nesta tabela no mínimo 8 dados (registros). 
4. Faça um SELECT que retorne todes o/a(s) estudantes com a nota maior do que 7.0. 
5. Faça um SELECT que retorne todes o/a(s) estudantes com a nota menor do que 7.0. 
6. Ao término atualize um registro desta tabela através de uma query de atualização. */

-- Criar banco de dados:
CREATE DATABASE escola;
USE escola;

-- Criar tabela de estudantes:
CREATE TABLE estudantes (
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
idade INT,
serie VARCHAR(50),
nota DECIMAL(4,2),
email VARCHAR(100)
);

-- Registros dos estudantes:
INSERT INTO estudantes (nome, idade, serie, nota, email) VALUES
('Lucas Pereira', 14, '9º Ano', 8.5, 'lucas@escola.com'),
('Mariana Alves', 13, '8º Ano', 6.2, 'mariana@escola.com'),
('Rafael Santos', 15, '1º EM', 7.8, 'rafael@escola.com'),
('Beatriz Lima', 14, '9º Ano', 5.9, 'beatriz@escola.com'),
('João Costa', 16, '2º EM', 9.1, 'joao@escola.com'),
('Ana Rocha', 13, '8º Ano', 6.8, 'ana@escola.com'),
('Pedro Martins', 15, '1º EM', 7.2, 'pedro@escola.com'),
('Camila Souza', 14, '9º Ano', 4.5, 'camila@escola.com');

-- Estudanntes com nota maior que 7
SELECT * FROM estudantes
WHERE nota > 7.0;

-- Estutantes com nota menor que 7
SELECT * FROM estudantes
WHERE nota < 7.0;

-- Atualizar registro:
UPDATE estudantes
SET nota = 6.0
WHERE id = 8;

