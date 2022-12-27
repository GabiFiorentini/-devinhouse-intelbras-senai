
# M2S07 - Resolução de exercícios

Resolução de tarefas da semana 7 do módulo II DEVinHouse

##[M2S07] Ex 1 - Diferencie chave primária de chave estrangeira. (pk x fk)
Chave primária - É um identificador único não nulo de cada linha na tabela.

Chave estrangeira - É um conjunto de uma ou mais colunas utilizados para se referir a uma chave primária em outra tabela.

## [M2S07] Ex 2 - Considere o seguinte comando da linguagem de definição de dados DDL do SQ:
CREATE TABLE Item (ID INT(7), Nome CHAR (20), Linha Y); 

=====================================================

O comando a ser inserido na denominada Linha Y, para declarar o atributo ID como chave primária da tabela é:

- A. PRIMARY KEY = ID
- B. (ID) PRIMARY KEY
- C. ID AS PRIMARY KEY
- D. HAVING PRIMARY KEY = ID
- E. PRIMARY KEY (ID)

CREATE TABLE Item (
	ID INT(7), 
	Nome CHAR (20), 
	PRIMARY KEY(ID)
); 

RESPOSTA: E. PRIMARY KEY (ID)

## [M2S07] Ex 3 - Considere o seguinte comando da linguagem de definição de dados DDL do SQL para a criação de uma tabela:
CREATE TABLE Produto (Codigo INT (10) PRIMARY KEY, Nome VARCHAR (20), ID INT (10), Linha X);

======================================================

O código que deve substituir a ‘Linha X’, para declarar o atributo ID como chave estrangeira, tendo como origem o atributo ID da tabela ‘Origem’ é:

- A. FOREIGN KEY ID OF Origem (ID)
- B. FOREIGN KEY (ID) references Origem (ID)
- C. FOREIGN KEY (ID): Origem (ID)
- D. FOREIGN KEY ID HAVING PRIMARY KEY Origem (ID)
- E. FOREIGN KEY ID AS PRIMARY KEY Origem (ID)

CREATE TABLE Produto (
	Codigo INT (10) PRIMARY KEY, 
	Nome VARCHAR (20), 
	ID INT (10), 
	FOREIGN KEY (ID)
	REFERENCES ORIGEM(ID)
);

RESPOSTA: B. FOREIGN KEY (ID) references Origem (ID)

## [M2S07] Ex 4 - Como poderíamos alterar a criação da tabela anterior para que a primary key auto seja incrementada a cada nova linha?
Podemos utilizar o AUTO INCREMENT que geralmente é utilizado na PRIMARY KEY

## [M2S07] Ex 5 - Em uma tabela chamada Contribuinte:
Em uma tabela chamada Contribuinte de um banco de dados padrão SQL aberto e em condições ideais há o campo idContribuinte do tipo inteiro e chave primária. Há também o campo nomeContribuinte que é do tipo varchar. Nessa tabela, um Auditor Fiscal deseja alterar o nome do contribuinte de id 1 para 'Marcos Silva'. Para isso, terá que utilizar o comando:

- A. ALTER TABLE Contribuinte SET nomeContribuinte='Marcos Silva' WHERE idContribuinte=1;
- B. UPDATE Contribuinte SET nomeContribuinte='Marcos Silva' WHERE idContribuinte=1;
- C. UPDATE nomeContribuinte TO 'Marcos Silva' FROM Contribuinte WHERE idContribuinte=1;
- D. ALTER TABLE Contribuinte FIELD nomeContribuinte='Marcos Silva' WHERE idContribuinte=1;
- E. UPDATE TABLE Contribuinte FIELD nomeContribuinte='Marcos Silva' WHERE idContribuinte=1;

Resposta correta B

## [M2S07] Ex 6 - A expresão em SQL da tabela DEPENDENTE
A expressão em SQL padrão descrita no quadro abaixo realiza uma consulta em um banco de dados que contém, pelo menos, duas tabelas, sendo uma denominada FUNCIONARIO e outra denominada DEPENDENTE, que armazenam informações sobre funcionários de uma empresa e seus dependentes, respectivamente.

A tabela FUNCIONARIO possui pelo menos três atributos: nome_func, sobrenome_func e cpf_func, que armazenam, respectivamente, o nome, o sobrenome e o número de CPF dos funcionários.

A tabela DEPENDENTE possui pelo menos quatro atributos: nome_depen, sobrenome_depen e cpf_depen, que armazenam, respectivamente, o nome, o sobrenome e o número de CPF dos dependentes, e cpf_func_resp, que armazena o número do CPF do funcionário responsável pelos dependentes.

=======================================================

SELECT nome_func, sobrenome_func
FROM FUNCIONARIO
WHERE NOT EXISTS (
SELECT * FROM DEPENDENTE
WHERE cpf_func = cpf_func_resp
);

=======================================================
Com base nas informações apresentadas, a consulta em SQL padrão acima descrita recupera :

- A. o nome e o sobrenome de funcionários que não têm dependentes.
- B. o nome e o sobrenome de todos os dependentes dos funcionários.
- C. o nome e o sobrenome de funcionários que têm dependentes.
- D. todos os atributos de funcionários que não têm dependentes.
- E. todos os atributos de todos os dependentes dos funcionários.

Resposta correta A

## [M2S07] Ex 7 - Considere a tabela FUNCIONARIOS:
Considere a tabela FUNCIONARIOS, descrita pela DDL abaixo (SQL99 ou superior), e os três comandos SQL de inserção de instâncias.

===============================================
create table funcionarios
(cpf char(11) not null primary key,
rg char(10),
nome varchar(100) not null,
nivel int,
salario float);

===============================================

insert into funcionarios(cpf,nome,nivel,salario) values ('111', 'joao', 2,3000);
insert into funcionarios(cpf,rg,nome,nivel,salario) values ('222', '222', 'jose',1,1500);
insert into funcionarios(cpf,rg,nome) values ('333', '333', 'jose');

===============================================

Após a execução dos comandos acima, o administrador da base de dados deseja fazer as modificações na tabela FUNCIONARIOS, representadas pelos comandos SQL abaixo.
_
I - alter table funcionarios add unique(rg);
II - alter table funcionarios add check (nivel is not null);
III- alter table funcionarios alter column salario set default 1000;
_
Considerando a execução de cada comando como uma transação independente, quais comandos executam COM ERRO?
A. Apenas I.
B. Apenas II.
C. Apenas III.
D. Apenas I e II.
E. I, II e III.

Resposta correta B

## [M2S07] Ex 8 - A maioria dos Sistemas de Gerência de Banco de Dados (SGBD) utiliza a linguagem Structured Query Language (SQL).
Esta linguagem é formada por sublinguagens, tal como a _____ que é utilizada para modificar esquemas de tabela. Assinale a alternativa que preencha corretamente a lacuna. 

- A. Data Query Language (DQL) 
- B. Data Control Language (DCL) 
- C. Data Sublanguage (DSL) 
- D. Data Manipulation Language (DML) 
- E. Data Definition Language (DDL)

Resposta correta D

##[M2S07] Ex 9 - Crie um Banco de Dados com nome CLINICA
CREATE TABLE clinica.sala (
	numero_sala INT PRIMARY KEY, 
	andar INT NOT NULL
);

CREATE TABLE clinica.medico(
	crm INT PRIMARY KEY,
	nome VARCHAR(40) NOT NULL,
	idade INT NOT NULL,
	especialidade VARCHAR(40) NOT NULL DEFAULT('Ortopedia'),
	cpf CHAR(11),
	data_admissao DATE,
	numero_sala INT NOT NULL,
	CONSTRAINT fk_sala FOREIGN KEY(numero_sala) REFERENCES clinica.sala(numero_sala)
);

CREATE TABLE clinica.paciente(
	id_paciente SERIAL PRIMARY KEY,
	rg CHAR(15) NOT NULL,
	nome VARCHAR(40) NOT NULL,
	data_nascimento DATE,
	cidade CHAR(30) NOT NULL,
	doenca VARCHAR(40) NOT NULL,
	plano_saude VARCHAR(40) NOT NULL DEFAULT('SUS')
);

CREATE TABLE clinica.consulta (
	cod_consulta INT PRIMARY KEY,
	data_horario TIMESTAMP,
	crm INT NOT NULL, 
	id_paciente INT NOT NULL,
	CONSTRAINT fk_medico FOREIGN KEY(crm) REFERENCES clinica.medico(crm),
	CONSTRAINT fk_paciente FOREIGN KEY(id_paciente) REFERENCES clinica.paciente(id_paciente)
);

CREATE TABLE clinica.funcionarios (
	matricula INT PRIMARY KEY,
	nome VARCHAR(40) NOT NULL,
	data_nascimento DATE NOT NULL,
	data_admissao DATE NOT NULL,
	cargo VARCHAR(40) NOT NULL DEFAULT('Assistente médico'),
	salario FLOAT NOT NULL DEFAULT(510.00)
);

## [M2S07] Ex 10 - QUESTÃO 10. Crie um BD com o nome REVENDEDORA_CARROS de acordo com a descrição indicada.
Utilize as regras de restrições (constraints), caso seja necessário.  
A. Definir modelo ER do banco com pks, fks e relacionamentos 
B. A seguir crie as tabelas neste Banco de Dados conforme a relação abaixo:

=======================================================

“Uma revendedora de veículos usados pretende informatizar o seu sistema de vendas, com o intuito de manter um histórico das vendas realizadas. Cada automóvel é identificado por um código nacional (RENAVAM) e possui as seguintes características: placa, marca, modelo, ano de fabricação, ano do modelo, cor, motor, número de portas, tipo de combustível, preço. Os clientes, quando são cadastrados na revendedora, são identificados por um código numérico, e devem fornecer o nome, sobrenome, telefone e endereço completo (rua, número, complemento, bairro, cidade, estado, CEP). Também são cadastrados os vendedores, que são identificados por um código numérico, e devem fornecer o nome, sobrenome, telefone e endereço completo (rua, número, complemento, bairro, cidade, estado, CEP). Além destes dados, deve ser inserida a data de admissão e o salário fixo do vendedor. Cada negócio efetuado deverá ser registrado com detalhamento de data e preço pago, além da identidade do comprador, vendedor e do automóvel vendido. “

CREATE TABLE revendedora.veiculo (
	renavam CHAR(11) PRIMARY KEY,
	placa CHAR(7) NOT NULL,
	marca VARCHAR(30) NOT NULL,
	modelo VARCHAR(30) NOT NULL,
	ano_fabricacao DATE NOT NULL,
	ano_modelo DATE NOT NULL,
	cor VARCHAR(40) NOT NULL,
	motor CHAR(10) NOT NULL,
	num_portas INT NOT NULL,
	tipo_combustivel VARCHAR(40) NOT NULL,
	preco FLOAT NOT NULL
);


CREATE TABLE revendedora.cliente (
	cod_cliente SERIAL PRIMARY KEY,
	nome_cliente VARCHAR(40) NOT NULL,
	sobrenome_cliente VARCHAR(40) NOT NULL,
	telefone_cliente CHAR(15) NOT NULL,
	endereco_cliente VARCHAR(255) NOT NULL
); 

CREATE TABLE revendedora.vendedor (
	cod_vendedor SERIAL PRIMARY KEY,
	nome_vendedor VARCHAR(40) NOT NULL,
	sobrenome_vendedor VARCHAR(40) NOT NULL,
	telefone_vendedor CHAR(15) NOT NULL,
	endereco_vendedor VARCHAR(255) NOT NULL,
	admissao DATE NOT NULL,
	salario FLOAT NOT NULL
);

CREATE TABLE revendedora.venda (
	cod_venda SERIAL PRIMARY KEY,
	data_venda DATE NOT NULL,
	preco_pago FLOAT NOT NULL,
	vendedor INT NOT NULL,
	CONSTRAINT fk_vendedor FOREIGN KEY(vendedor) REFERENCES revendedora.vendedor(cod_vendedor)
	cliente INT NOT NULL,
	CONSTRAINT fk_cliente FOREIGN KEY(cliente) REFERENCES revendedora.cliente(cod_cliente)
	carro_vendido INT NOT NULL
	CONSTRAINT fk_carro FOREIGN KEY(carro_vendido) REFERENCES revendedora.veiculo(renavam)
);
