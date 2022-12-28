
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

