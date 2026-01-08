/*
Crie um banco de dados para um serviço de um Açougue ou de um Hortifruti. 
O nome do Banco de dados deverá ter o seguinte nome db_cidade_das_carnes ou cidade_dos_vegetais. 
O sistema trabalhará com as informações dos produtos comercializados pela empresa. 
O sistema trabalhará com 2 tabelas tb_produtos e tb_categorias, que deverão estar relacionadas. 
*/

-- Criar o bando de dados:
CREATE DATABASE db_cidade_dos_vegetais;
USE db_cidade_dos_vegetais;

-- Criar a tabela categorias
CREATE TABLE tb_categorias (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    descricao VARCHAR(100)
);

INSERT INTO tb_categorias (nome, descricao) VALUES
('Frutas', 'Frutas frescas'),
('Legumes', 'Legumes variados'),
('Verduras', 'Folhosos e verduras'),
('Orgânicos', 'Produtos sem agrotóxicos'),
('Importados', 'Produtos importados');

-- Criar a tabela produtos
CREATE TABLE tb_produtos (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(6,2),
    estoque INT,
    unidade VARCHAR(20),
    categoria_id BIGINT,
    FOREIGN KEY (categoria_id) REFERENCES tb_categorias(id)
);

INSERT INTO tb_produtos (nome, preco, estoque, unidade, categoria_id) VALUES
('Maçã', 6.50, 100, 'kg', 1),
('Banana', 4.20, 120, 'kg', 1),
('Tomate', 5.80, 80, 'kg', 2),
('Cenoura', 3.90, 90, 'kg', 2),
('Alface', 2.50, 60, 'unidade', 3),
('Rúcula', 3.20, 50, 'unidade', 3),
('Maçã Orgânica', 9.50, 40, 'kg', 4),
('Uva Importada', 18.90, 30, 'kg', 5);

-- Produtos com preços maior que R$50
SELECT * FROM tb_produtos
WHERE preco > 50.00;

-- Produtos com preço entre R$50 e R$150
SELECT * FROM tb_produtos
WHERE preco BETWEEN 50.00 AND 150.00;

-- Produtos com letra “M” no nome
SELECT * FROM tb_produtos
WHERE nome LIKE '%M%';

-- produtos + categorias
SELECT *
FROM tb_produtos
INNER JOIN tb_categorias
ON tb_produtos.categoria_id = tb_categorias.id;

-- filtrando por categoria específica
SELECT tb_produtos.nome, tb_produtos.preco, tb_categorias.nome AS categoria
FROM tb_produtos
INNER JOIN tb_categorias
ON tb_produtos.categoria_id = tb_categorias.id
WHERE tb_categorias.nome = 'Frutas';