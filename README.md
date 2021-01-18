# StarWars Planet API

## Pré requisitos

- Docker

PS: Subir o container presente no arquivo docker-compose antes de executar a API.

## Métodos

### Listar todos os planetas

- Endpoint

  `/ GET /planets`

### Criar um planeta

- Endpoint

  `/ POST /planets`

- Request Body Example

  `{ "name" : 'Tatooine', "weather": 'arid', "soil" "desert" }`

### Listar por Id

- Endpoint

  `/ GET /planets/id/:id`

### Listar por name

- Endpoint

  `/ GET /planets/name/:name`

### Apagar um planeta

- Endpoint

  `/ DELETE /planets/:id`
