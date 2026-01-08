/* Crie um banco de dados para um serviço de uma Pizzaria. 
O nome do Banco de dados deverá ter o seguinte nome db_pizzaria_legal. 
O sistema trabalhará com as informações dos produtos comercializados pela empresa. 
O sistema trabalhará com 2 tabelas tb_pizzas e tb_categorias, que deverão estar relacionadas.
*/

-- Criar o banco de dados:
CREATE DATABASE db_pizzaria_legal;
USE db_pizzaria_legal;

-- Criar tabela categorias
CREATE TABLE tb_categorias (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    descricao VARCHAR(100)
);

INSERT INTO tb_categorias (nome, descricao) VALUES
('Salgada', 'Pizzas tradicionais salgadas'),
('Doce', 'Pizzas com recheio doce'),
('Vegetariana', 'Sem carne'),
('Especial', 'Receitas da casa'),
('Premium', 'Ingredientes especiais');

-- Criar tabela pizzas
CREATE TABLE tb_pizzas (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    tamanho VARCHAR(20),
    valor DECIMAL(6,2),
    ingredientes VARCHAR(255),
    categoria_id BIGINT,
    FOREIGN KEY (categoria_id) REFERENCES tb_categorias(id)
);

INSERT INTO tb_pizzas (nome, tamanho, valor, ingredientes, categoria_id) VALUES
('Calabresa', 'Grande', 55.00, 'Calabresa e cebola', 1),
('Marguerita', 'Média', 48.00, 'Mussarela, tomate e manjericão', 1),
('Chocolate', 'Média', 50.00, 'Chocolate ao leite', 2),
('Romeu e Julieta', 'Pequena', 45.00, 'Goiabada e queijo', 2),
('Vegetariana', 'Grande', 60.00, 'Legumes e queijo', 3),
('Quatro Queijos', 'Grande', 65.00, 'Mussarela, gorgonzola, parmesão e provolone', 4),
('Camarão', 'Grande', 95.00, 'Camarão e catupiry', 5),
('Trufada', 'Média', 85.00, 'Cogumelos e azeite trufado', 5);

-- Pizzas com valor maior que R$45
SELECT * FROM tb_pizzas
WHERE valor > 45.00;

-- Pizzas com valor entre R$50 e R$100
SELECT * FROM tb_pizzas
WHERE valor BETWEEN 50.00 AND 100.00;

-- Pizzas com letra “M” no nome
SELECT * FROM tb_pizzas
WHERE nome LIKE '%M%';

-- pizzas + categorias
SELECT *
FROM tb_pizzas
INNER JOIN tb_categorias
ON tb_pizzas.categoria_id = tb_categorias.id;

-- filtrando por categoria
SELECT tb_pizzas.nome, tb_pizzas.valor, tb_categorias.nome AS categoria
FROM tb_pizzas
INNER JOIN tb_categorias
ON tb_pizzas.categoria_id = tb_categorias.id
WHERE tb_categorias.nome = 'Doce';