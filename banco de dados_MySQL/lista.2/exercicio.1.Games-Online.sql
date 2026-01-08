/* 
Criar um Banco de dados para um serviço de um Games Online. 
O nome do Banco de dados deverá ter o seguinte nome db_generation_game_online. 
O sistema trabalhará com as informações dos personagens do jogo. 
O sistema trabalhará com 2 tabelas tb_personagens e tb_classes, que deverão estar relacionadas.
*/

-- Criar o banco de dados:
CREATE DATABASE db_generation_game_online;
USE db_generation_game_online;

-- Criar a tabela classes:
CREATE TABLE tb_classes (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    descricao VARCHAR(100)
);
 INSERT INTO tb_classes (nome, descricao) VALUES
('Duelista', 'Foco em abates e entrada'),
('Iniciador', 'Coleta informações e abre espaço'),
('Controlador', 'Controle de área e visão'),
('Sentinela', 'Defesa e suporte ao time');

-- Criar a tabela personagens:
CREATE TABLE tb_personagens (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    habilidade_principal VARCHAR(100),
    ataque INT,
    defesa INT,
    classe_id BIGINT,
    FOREIGN KEY (classe_id) REFERENCES tb_classes(id)
);

INSERT INTO tb_personagens (nome, habilidade_principal, ataque, defesa, classe_id) VALUES
('Jett', 'Mobilidade aérea', 2800, 1200, 1),
('Phoenix', 'Fogo regenerativo', 2600, 1300, 1),
('Sova', 'Reconhecimento com flechas', 2400, 1400, 2),
('Breach', 'Atordoamento em área', 2300, 1500, 2),
('Viper', 'Controle com veneno', 2200, 1800, 3),
('Brimstone', 'Controle tático', 2100, 1900, 3),
('Sage', 'Cura e ressurreição', 1800, 2200, 4),
('Killjoy', 'Defesa com dispositivos', 1900, 2100, 4);

-- Ataque maior que 2000
SELECT * FROM tb_personagens
WHERE ataque > 2000;

-- Defesa entre 1500 e 2200
SELECT * FROM tb_personagens
WHERE defesa BETWEEN 1500 AND 2200;

-- Nome contendo a letra “J”
SELECT * FROM tb_personagens
WHERE nome LIKE '%J%';

-- Unindo os dados da tabela tb_personagens com os dados da tabela tb_classes.
SELECT *
FROM tb_personagens
INNER JOIN tb_classes
ON tb_personagens.classe_id = tb_classes.id;

-- Unindo os dados da tabela tb_personagens com os dados da tabela tb_classes, onde traga apenas os personagens que pertençam a uma classe específica 
SELECT tb_personagens.nome, tb_classes.nome AS classe
FROM tb_personagens
INNER JOIN tb_classes
ON tb_personagens.classe_id = tb_classes.id
WHERE tb_classes.nome = 'Duelista';