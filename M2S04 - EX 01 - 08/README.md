# M2S04 - Resolução de exercícios

Resolução dos exercícios apresentados na semana 4 do módulo II do DEVinHouse 



## [M2S04] Ex 1 - O que é REST Web Services?
São serviços web que atendem uma determinada arquitetura para transferência de dados de um local para o outro, onde regras devem ser seguidas para atender uma estrutura. 

## [M2S04] Ex 3 - Métodos HTTP
- GET: Solicita algo ao servidor (pegar algo) - Leitura - Idempotente
- POST: Permite a inclusão de uma informação que serão processadas, porém realiza mudanças dentro do banco de dados - Não idempotente - As informações não ficam visíveis dentro do body da requisição. Ex: Incluir endereço de email
- PUT: Atualizar toda a estrutura em um banco de dados - Idempotente
- DELETE: Utilizado para deletar um registro da estrutura do banco de dados.
- OPTIONS: Usado para descrever as opções de comunicação com os recursos, no caso os tipos de requisições possíveis. Usado com o cors ativado
- PATCH: Realiza a atualização parcial da estrutura em um banco de dados. Uma única informação dentro de um bloco de dados.

## [M2S04] Ex 2 - Cite as vantages do protocolo REST
- Flexibilidade
- Estruturação
- Aproveitamento de recursos HTTP

## [M2S04] Ex 4 - Levels de maturidade de uma API
Explique os 4 levels de maturidade de uma API Rest
- Nível 0 = É o ponto inicial da API que aceita apenas o verbo POST
- Nível 1 = Uso eficiente das URLS (sentido)
- Nível 2 = Utilização adequada dos verbos HTTP
- Nível 3 - HATEOAS permitir a navegação pela API

## [M2S04] Ex 5 - Verbos HTTP
- GET: Solicita algo ao servidor (pegar algo) - Leitura - Idempotente
- POST: Permite a inclusão de uma informação que serão processadas, porém realiza mudanças dentro do banco de dados - Não idempotente - As informações não ficam visíveis dentro do body da requisição. Ex: Incluir endereço de email
- PUT: Atualizar toda a estrutura em um banco de dados - Idempotente
- DELETE: Utilizado para deletar um registro da estrutura do banco de dados.
- OPTIONS: Usado para descrever as opções de comunicação com os recursos, no caso os tipos de requisições possíveis. Usado com o cors ativado
- PATCH: Realiza a atualização parcial da estrutura em um banco de dados. Uma única informação dentro de um bloco de dados.

## [M2S04] Ex 7 - NestJs
Através do que você aprendeu em nossas aulas, explique o que é NestJs, e quando devemos utilizar.
- É uma abstração do Node.js facilitando o entendimento, organização e praticidade no desenvolvimento

## [M2S04] Ex 8 - Plataformas suportadas pelo NestJS
Express e firebase