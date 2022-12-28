
# De acordo com o modelo relacional e lógico abaixo:
CREATE TABLE concessionaria.cliente (
cpf CHAR(11) PRIMARY KEY,
nome_cliente VARCHAR(40) NOT NULL,
sobrenome_cliente VARCHAR(40) NOT NULL
);

CREATE TABLE concessionaria.vendedor (
cod_vendedor SERIAL PRIMARY KEY,
nome_vendedor VARCHAR(40) NOT NULL,
sobrenome_vendedor VARCHAR(40) NOT NULL
);

CREATE TABLE concessionaria.veiculo (
renavam CHAR PRIMARY KEY,
modelo VARCHAR(30) NOT NULL,
marca VARCHAR(30) NOT NULL
);

## [M2S08] Ex 8 - Exiba a marca e modelo do veículo mais barato.
SELECT modelo, marca FROM concessionaria.veiculo
WHERE preco = (SELECT MIN(concessionaria.veiculo.preco)
FROM concessionaria.veiculo
WHERE concessionaria.veiculo.preco = preco
);

