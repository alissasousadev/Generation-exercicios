/*
Crie um banco de dados para um serviço de uma loja de Material de Construção. 
O nome do Banco de dados deverá ter o seguinte nome db_construindo_vidas. 
O sistema trabalhará com as informações dos produtos comercializados pela empresa. 
O sistema trabalhará com 2 tabelas tb_produtos e tb_categorias, que deverão estar relacionadas. 
*/

-- Criar Bando de dados:
CREATE DATABASE db_construindo_vidas;
USE db_construindo_vidas;

-- Criar tabela categoria:
CREATE TABLE tb_categorias (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    descricao VARCHAR(100)
);

INSERT INTO tb_categorias (nome, descricao) VALUES
('Hidráulica', 'Materiais para encanamento'),
('Elétrica', 'Materiais elétricos'),
('Ferramentas', 'Ferramentas manuais e elétricas'),
('Acabamento', 'Tintas, pisos e revestimentos'),
('Construção', 'Materiais básicos de obra');

-- Criar tabela produtos:
CREATE TABLE tb_produtos (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(8,2),
    estoque INT,
    marca VARCHAR(50),
    categoria_id BIGINT,
    FOREIGN KEY (categoria_id) REFERENCES tb_categorias(id)
);

INSERT INTO tb_produtos (nome, preco, estoque, marca, categoria_id) VALUES
('Cimento CP II', 38.90, 200, 'Votoran', 5),
('Areia Média', 120.00, 50, 'Local', 5),
('Tinta Acrílica', 159.90, 30, 'Suvinil', 4),
('Torneira', 89.90, 40, 'Deca', 1),
('Fio Elétrico 2,5mm', 149.90, 60, 'Prysmian', 2),
('Martelo', 45.00, 80, 'Tramontina', 3),
('Chave de Fenda', 25.00, 100, 'Tramontina', 3),
('Disjuntor', 35.00, 70, 'Schneider', 2);

-- Produtos com preço maior que R$100
SELECT * FROM tb_produtos
WHERE preco > 100.00;

-- Produtos com preço entre R$70 e R$150
SELECT * FROM tb_produtos
WHERE preco BETWEEN 70.00 AND 150.00;

-- Produtos com letra “C” no nome
SELECT * FROM tb_produtos
WHERE nome LIKE '%C%';

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
WHERE tb_categorias.nome = 'Ferramentas';