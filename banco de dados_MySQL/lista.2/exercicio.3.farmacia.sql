/* 
Crie um banco de dados para um serviço de uma Farmácia. 
O nome do Banco de dados deverá ter o seguinte nome db_farmacia_bem_estar. 
O sistema trabalhará com as informações dos produtos comercializados pela empresa. 
O sistema trabalhará com 2 tabelas tb_produtos e tb_categorias, que deverão estar relacionadas.
*/

-- Criar o bando de dados:
CREATE DATABASE db_farmacia_bem_estar;
USE db_farmacia_bem_estar;

-- Criar a tabela categoria 
CREATE TABLE tb_categorias (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    descricao VARCHAR(100)
);

INSERT INTO tb_categorias (nome, descricao) VALUES
('Medicamentos', 'Remédios em geral'),
('Cosméticos', 'Produtos de beleza'),
('Higiene', 'Produtos de higiene pessoal'),
('Vitaminas', 'Suplementos e vitaminas'),
('Infantil', 'Produtos para crianças');


-- Criar a tabela produtos
CREATE TABLE tb_produtos (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(6,2),
    estoque INT,
    fabricante VARCHAR(100),
    categoria_id BIGINT,
    FOREIGN KEY (categoria_id) REFERENCES tb_categorias(id)
);

INSERT INTO tb_produtos (nome, preco, estoque, fabricante, categoria_id) VALUES
('Dipirona', 12.50, 100, 'EMS', 1),
('Paracetamol', 10.00, 80, 'Medley', 1),
('Shampoo Anticaspa', 25.90, 50, 'Clear', 2),
('Sabonete Líquido', 18.00, 60, 'Dove', 3),
('Vitamina C', 35.00, 40, 'Lavitan', 4),
('Pomada Assadura', 22.00, 30, 'Hipoglós', 5),
('Protetor Solar', 59.90, 20, 'Nivea', 2),
('Fralda Descartável', 79.90, 25, 'Pampers', 5);


-- Produtos  com valor e maior que R$ 50
SELECT * FROM tb_produtos
WHERE preco > 50.00;

-- Produtos cujo valor esteja no intervalo R$ 5,00 e R$ 60,00. 
SELECT * FROM tb_produtos
WHERE preco BETWEEN 5.00 AND 60.00;

-- Todos os produtos que possuam a letra C no atributo nome. 
SELECT * FROM tb_produtos
WHERE nome LIKE '%C%';

-- Unindo os dados da tabela tb_produtos com os dados da tabela tb_categorias.
SELECT *
FROM tb_produtos
INNER JOIN tb_categorias
ON tb_produtos.categoria_id = tb_categorias.id;

--  Produtos que pertençam a uma categoria específica 
SELECT tb_produtos.nome, tb_produtos.preco, tb_categorias.nome AS categoria
FROM tb_produtos
INNER JOIN tb_categorias
ON tb_produtos.categoria_id = tb_categorias.id
WHERE tb_categorias.nome = 'Cosméticos';