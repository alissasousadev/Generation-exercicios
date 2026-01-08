/*
Crie um banco de dados para uma plataforma de Cursos Online (EAD). 
O nome do Banco de dados deverá ter o seguinte nome db_curso_da_minha_vida. 
O sistema trabalhará com as informações dos produtos comercializados pela empresa. 
O sistema trabalhará com 2 tabelas tb_cursos e tb_categorias, que deverão estar relacionadas.
*/

-- Criar banco de dados:
CREATE DATABASE db_curso_da_minha_vida;
USE db_curso_da_minha_vida;

-- Criar a tabela categorias 
CREATE TABLE tb_categorias (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    descricao VARCHAR(100)
);

INSERT INTO tb_categorias (nome, descricao) VALUES
('Java', 'Cursos de programação Java'),
('Frontend', 'Cursos de HTML, CSS e JavaScript'),
('Backend', 'Cursos de desenvolvimento backend'),
('Banco de Dados', 'Cursos de SQL e modelagem'),
('DevOps', 'Cursos de infraestrutura e deploy');

-- Criar a tabela cursos:
CREATE TABLE tb_cursos (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    carga_horaria INT,
    valor DECIMAL(8,2),
    nivel VARCHAR(30),
    categoria_id BIGINT,
    FOREIGN KEY (categoria_id) REFERENCES tb_categorias(id)
);

INSERT INTO tb_cursos (nome, carga_horaria, valor, nivel, categoria_id) VALUES
('Java Básico', 60, 650.00, 'Iniciante', 1),
('Java Orientado a Objetos', 80, 850.00, 'Intermediário', 1),
('Java Avançado', 100, 1200.00, 'Avançado', 1),
('Spring Boot', 90, 1100.00, 'Avançado', 3),
('HTML e CSS', 40, 400.00, 'Iniciante', 2),
('JavaScript Completo', 70, 750.00, 'Intermediário', 2),
('MySQL Essencial', 50, 600.00, 'Iniciante', 4),
('Docker para Devs', 60, 950.00, 'Intermediário', 5);

-- Cursos com valor maior que R$500,00
SELECT * FROM tb_cursos
WHERE valor > 500.00;

-- Cursos com valor entre R$600,00 e R$1000,00
SELECT * FROM tb_cursos
WHERE valor BETWEEN 600.00 AND 1000.00;

-- Cursos com letra “J” no nome
SELECT * FROM tb_cursos
WHERE nome LIKE '%J%';

-- cursos + categorias
SELECT *
FROM tb_cursos
INNER JOIN tb_categorias
ON tb_cursos.categoria_id = tb_categorias.id;

-- filtrando por categoria específica
SELECT 
    tb_cursos.nome,
    tb_cursos.valor,
    tb_cursos.nivel,
    tb_categorias.nome AS categoria
FROM tb_cursos
INNER JOIN tb_categorias
ON tb_cursos.categoria_id = tb_categorias.id
WHERE tb_categorias.nome = 'Java';