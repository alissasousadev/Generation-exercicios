/*
1. Crie um banco de dados para um serviço de RH de uma empresa, onde o sistema trabalhará com as informações dos colaboradores desta empresa.  
2. Crie uma tabela de colaboradores e determine 5 atributos relevantes dos colaboradores para se trabalhar com o serviço deste RH. 
3. Insira nesta tabela no mínimo 5 dados (registros). 
4. Faça um SELECT que retorne todes os colaboradores com o salário maior do que 2000. 
5. Faça um SELECT que retorne todes os colaboradores com o salário menor do que 2000. 
6. Ao término atualize um registro desta tabela através de uma query de atualização. */

-- Criar o banco de dados:
CREATE DATABASE rh_empresa;

-- Selecionar o banco;
USE rh_empresa;

-- Criar tabela de colaboradores:
CREATE TABLE colaboradores (
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
cargo VARCHAR(100),
salario DECIMAL(10,2),
setor VARCHAR(100),
data_admissao DATE,
email VARCHAR(100)
);

-- Criar registros de colaboradores:
INSERT INTO colaboradores (nome, cargo, salario, setor, data_admissao, email) VALUES
('Ana Silva', 'Analista Administrativo', 2500.00, 'Administrativo', '2022-03-15', 'ana.silva@empresa.com'),
('Bruno Costa', 'Assistente Financeiro', 1800.00, 'Financeiro', '2023-01-10', 'bruno.costa@empresa.com'),
('Carla Souza', 'Desenvolvedora', 3500.00, 'TI', '2021-08-20', 'carla.souza@empresa.com'),
('Daniela Lima', 'Estagiária', 1200.00, 'TI', '2024-02-01', 'daniela.lima@empresa.com'),
('Eduardo Rocha', 'Coordenador de RH', 4200.00, 'RH', '2020-11-05', 'eduardo.rocha@empresa.com');

-- Selecionar os colaboradores com salario maior que 2000
SELECT * 
FROM colaboradores
WHERE salario > 2000;

-- Selecionar os colaboradores com salario menor que 2000
SELECT * 
FROM colaboradores
WHERE salario < 2000;

-- Atualizar salario:
UPDATE colaboradores
SET salario = 1800.00, cargo = 'Assistente de TI'
WHERE id = 4;