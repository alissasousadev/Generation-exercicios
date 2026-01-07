/*
1. Crie um banco de dados para um e-commerce, onde o sistema trabalhará com as informações dos produtos deste e-commerce.  
2. Crie uma tabela de produtos e determine 5 atributos relevantes dos produtos para se trabalhar com o serviço deste e-commerce. 
3. Insira nesta tabela no mínimo 8 dados (registros). 
4. Faça um SELECT que retorne todes os produtos com o valor maior do que 500. 
5. Faça um SELECT que retorne todes os produtos com o valor menor do que 500. 
6. Ao término atualize um registro desta tabela através de uma query de atualização. */

-- Criar bando de dado:
CREATE DATABASE ecommerce;
USE ecommerce;

-- Criar tabela de produtos:
CREATE TABLE produtos (
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
descricao VARCHAR(255),
valor DECIMAL(10,2),
categoria VARCHAR(100),
estoque INT
);

-- Inserir Produtos
INSERT INTO produtos (nome, descricao, valor, categoria, estoque) VALUES
('Notebook Dell', 'Notebook i5 8GB RAM', 3500.00, 'Informática', 10),
('Mouse Logitech', 'Mouse sem fio', 120.00, 'Periféricos', 50),
('Teclado Mecânico', 'Teclado RGB', 450.00, 'Periféricos', 30),
('Monitor LG', 'Monitor 24 polegadas', 900.00, 'Informática', 15),
('Smartphone Samsung', 'Galaxy A54', 1800.00, 'Telefonia', 20),
('Fone de Ouvido', 'Bluetooth', 300.00, 'Áudio', 40),
('Cadeira Gamer', 'Cadeira ergonômica', 850.00, 'Móveis', 8),
('Pen Drive 64GB', 'USB 3.0', 70.00, 'Acessórios', 100);

-- selecionar produtos com valor maior que 500
SELECT * FROM produtos
WHERE valor > 500;

-- Selecionar produtos com valor menor que 500
SELECT * FROM produtos
WHERE valor < 500;

-- Atualizar registro:
UPDATE produtos
SET valor = 99.00
WHERE id = 2;