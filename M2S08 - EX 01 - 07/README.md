
# [M2S08] - Considere o seguinte esquema relacional e responda às questões apresentando o respectivo SQL:

Cliente ( cod_cliente, cliente, profissao, localidade) 
Agencia ( cod_agencia, agencia, localidade) 
Conta ( num_conta, tipo_conta, cod_cliente, cod_agencia , saldo) 
Emprestimo ( num_emprestimo, cod_cliente , cod_agencia, valor)

CREATE TABLE banco.cliente (
	cod_cliente SERIAL PRIMARY KEY,
	nome_cliente VARCHAR(40) NOT NULL,
	profissao VARCHAR(40) NOT NULL,
	localidade VARCHAR (40) NOT NULL
);

CREATE TABLE banco.agencia (
	cod_agencia SERIAL PRIMARY KEY,
	agencia INT NOT NULL,
	localidade VARCHAR (40) NOT NULL 
);

CREATE TABLE banco.conta (
	num_conta INT PRIMARY KEY, 
	tipo_conta VARCHAR(30),
	cod_cliente_conta INT NOT NULL,
	CONSTRAINT fk_cod_cliente 
	FOREIGN KEY(cod_cliente_conta) 
	REFERENCES banco.cliente(cod_cliente),
	cod_agencia_conta INT NOT NULL,
	CONSTRAINT fk_cod_agencia 
	FOREIGN KEY(cod_agencia_conta) 
	REFERENCES banco.agencia(cod_agencia),
	saldo NUMERIC(10,2) NOT NULL
);

CREATE TABLE banco.emprestimo (
	num_emprestimo SERIAL PRIMARY KEY,
	cod_cliente_emprestimo INT NOT NULL,
	cod_agencia_empresimo INT NOT NULL,
	valor NUMERIC(10,2) NOT NULL
);

## [M2S08] Ex 1 - Quais os clientes (cod_cliente e cliente) deste Banco?
SELECT * FROM banco.cliente 

## [M2S08] Ex 2 -  Quais os clientes que residem em Braga?
SELECT nome_cliente 
FROM banco.cliente
WHERE localidade = 'Braga'

## [M2S08] Ex 3 - Quais os clientes (cod_cliente) com contas na agência cod_agencia = ‘123’?
SELECT cod_cliente_conta, cod_agencia_conta, agencia
FROM banco.conta
INNER JOIN banco.agencia
	ON banco.conta.cod_agencia_conta = banco.agencia.cod_agencia
WHERE agencia = 123

## [M2S08] Ex 4 - Listar o número de contas existentes em cada agência.
SELECT COUNT(cod_agencia_conta) 
FROM banco.conta 
GROUP BY cod_agencia_conta

## [M2S08] Ex 5 - Para cada agência (cod_agencia) com menos de 1000 contas, listar os valores máximo e mínimo dos saldos dessas contas, assim como o saldo médio.
SELECT agencia, COUNT(cod_agencia_conta)
FROM banco.conta
INNER JOIN banco.agencia
	ON banco.conta.cod_agencia_conta = banco.agencia.cod_agencia
GROUP BY agencia