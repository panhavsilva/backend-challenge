<h1 align="center">backend-challenge</h1>

> Status do projeto: 🚧 WIP 🚧

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/panhavsilva/backend-challenge#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/panhavsilva/backend-challenge/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
</p>

## :black_nib: Autor

:bust_in_silhouette: **Pâmela Vieira da Silva - @panhasilva**

* Github: [@panhavsilva](https://github.com/panhavsilva)

<br />

## Tabela de conteudo 
<!--ts-->
  * [Instalação](#instalação)
  * [Servidor](#servidor)
  * [Variaveis de ambiente](#variaveis-de-ambiente)
  * [Recursos](#recursos)
  * [Deploy](#deploy)
  * [Produtos](#products)
    * [Listar todos os produtos](#listar-todos-os-produtos)
    * [Pesquisar produto por ID](#pesquisar-produto-por-ID)
    * [Pesquisar produto por categoria](#pesquisar-produto-por-categoria)
    * [Pesquisar produto por preço](#pesquisar-produto-por-preço)
    * [Pesquisar produto por nome](#pesquisar-produto-por-nome)
    * [Pesquisar produto por descrição](#pesquisar-produto-por-decrição)
<!--te-->

## Instalação
Instale as dependêncies com 
```bash
npm install
#ou
yarn
```

## Servidor
Inicie o servidor com
```bash
npm start
#ou
yarn start
```
## Variaveis de ambiente
Crie um arquivo .env e defina algumas variáveis de ambiente dentro deste arquivo:
* `PORT`
* `DB_USER`
* `DB_PASSWORD`
* `DB_HOST`
* `DB_PORT`
* `DB_DATABASE`
* `DATABASE_URL`

## Recursos
* PRODUTOS
  * Listar todos os produtos
  * Pesquisar produto por ID
  * Pesquisar produto por categoria
  * Pesquisar produto por preço
  * Pesquisar produto por nome
  * Pesquisar produto pela descrição

## Deploy
Este repositório está pronto para ser executado dentro do Heroku.

---
## PRODUTOS

### Listar todos os produtos
  Retorna dados json sobre todos os produtos.

* **URL** <br />
  /products

* **Method** <br />
  `GET`

*  **URL Params** <br />
  None

* **Success Response** <br />
  * **Code:** 200 <br />
    **Content:** <br />
    ```json
    [
      {
        "title": "Caneca 3",
        "price": "20",
        "description": "caneca personalizavel",
        "category": "caneca",
        "image": "https://media.istockphoto.com/photos/two-mug-ready-for-branding-picture-id152964864?b=1&k=20&m=152964864&s=170667a&w=0&h=_U5g6b9e9oi5zoCIIH0ox4jSfb0rJMQDltu7sUrD8F8="
      },
      {
        "title": "Caneca 4",
        "price": "20",
        "description": "caneca personalizavel",
        "category": "caneca",
        "image": "https://media.istockphoto.com/photos/two-mug-ready-for-branding-picture-id152964864?b=1&k=20&m=152964864&s=170667a&w=0&h=_U5g6b9e9oi5zoCIIH0ox4jSfb0rJMQDltu7sUrD8F8="
      }
    ]
    ```
* **Error Response** <br />
  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Erro ao buscar produtos.", error: true }`

### Pesquisar produto por ID
  Retorna dados json sobre um produto.

* **URL** <br />
  /product/:id

* **Method** <br />
  `GET`

*  **URL Params** <br />
  **Required:** <br />
   `id=[string]`

* **Success Response** <br />
  * **Code:** 200 <br />
    **Content:** <br />
    ```json
    {
      "title": "Camiseta",
      "price": "10.2",
      "description": "camiseta preta",
      "category": "camiseta",
      "image": "https://media.istockphoto.com/photos/mens-shortsleeve-tshirt-mockup-in-front-and-back-views-picture-id1328049157?b=1&k=20&m=1328049157&s=170667a&w=0&h=Vr2S5dDVJaUxE8LqQ9q0lc98yNQFfU7rYaUA2rBnphk="
    }
    ```
* **Error Response** <br />
  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ message: "Produto não encontrado!", error: true }` <br />
  OR <br />

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Erro ao procurar produto.", error: true }`

### Pesquisar produto por categoria
  Retorna dados json sobre todos os produtos com a categoria solicitada.

* **URL** <br />
  /products/category

* **Method** <br />
  `GET`

*  **URL Query** <br />
  **Required:** <br />
   `?filter=[string]`

* **Success Response** <br />
  * **Code:** 200 <br />
    **Content:** <br />
      ```json
      [
        {
          "title": "Caneca",
          "price": "20",
          "description": "caneca personalizavel",
          "category": "caneca",
          "image": "https://media.istockphoto.com/photos/two-mug-ready-for-branding-picture-id152964864?b=1&k=20&m=152964864&s=170667a&w=0&h=_U5g6b9e9oi5zoCIIH0ox4jSfb0rJMQDltu7sUrD8F8="
        },
        {
          "title": "Caneca 1",
          "price": "20",
          "description": "caneca personalizavel",
          "category": "caneca",
          "image": "https://media.istockphoto.com/photos/two-mug-ready-for-branding-picture-id152964864?b=1&k=20&m=152964864&s=170667a&w=0&h=_U5g6b9e9oi5zoCIIH0ox4jSfb0rJMQDltu7sUrD8F8="
        }
      ]
      ```
* **Error Response** <br />
  * **Code:** 404 BAD REQUEST  <br />
    **Content:** `{ message: "Categoria invalida!", error: true }` <br />
  OR <br />

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Erro ao buscar produtos por categoria.", error: true }`
### Pesquisar produto por preço
  Retorna dados json sobre todos os produtos com o preço solicitado.

* **URL** <br />
  /products/price

* **Method** <br />
  `GET`

*  **URL Query** <br />
  **Required:** <br />
   `?filter=[string]`

* **Success Response** <br />
  * **Code:** 200 <br />
    **Content:** <br />
      ```json
      [
        {
          "title": "Caneca",
          "price": "20",
          "description": "caneca personalizavel",
          "category": "caneca",
          "image": "https://media.istockphoto.com/photos/two-mug-ready-for-branding-picture-id152964864?b=1&k=20&m=152964864&s=170667a&w=0&h=_U5g6b9e9oi5zoCIIH0ox4jSfb0rJMQDltu7sUrD8F8="
        },
        {
          "title": "Caneca 1",
          "price": "20",
          "description": "caneca personalizavel",
          "category": "caneca",
          "image": "https://media.istockphoto.com/photos/two-mug-ready-for-branding-picture-id152964864?b=1&k=20&m=152964864&s=170667a&w=0&h=_U5g6b9e9oi5zoCIIH0ox4jSfb0rJMQDltu7sUrD8F8="
        }
      ]
      ```
* **Error Response** <br />
  * **Code:** 404 BAD REQUEST  <br />
    **Content:** `{ message: "Não é um preço valido", error: true }` <br />
  OR <br />

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Erro ao buscar produtos por preço.", error: true }`

### Pesquisar produto por nome
  Retorna dados json sobre todos os produtos com o nome solicitado.

* **URL** <br />
  /products/title

* **Method** <br />
  `GET`

*  **URL Query** <br />
  **Required:** <br />
   `?filter=[string]`

* **Success Response** <br />
  * **Code:** 200 <br />
    **Content:** <br />
      ```json
      [
        {
          "title": "Caneca",
          "price": "20",
          "description": "caneca personalizavel",
          "category": "caneca",
          "image": "https://media.istockphoto.com/photos/two-mug-ready-for-branding-picture-id152964864?b=1&k=20&m=152964864&s=170667a&w=0&h=_U5g6b9e9oi5zoCIIH0ox4jSfb0rJMQDltu7sUrD8F8="
        },
        {
          "title": "Caneca 1",
          "price": "20",
          "description": "caneca personalizavel",
          "category": "caneca",
          "image": "https://media.istockphoto.com/photos/two-mug-ready-for-branding-picture-id152964864?b=1&k=20&m=152964864&s=170667a&w=0&h=_U5g6b9e9oi5zoCIIH0ox4jSfb0rJMQDltu7sUrD8F8="
        }
      ]
      ```
* **Error Response** <br />
  * **Code:** 404 BAD REQUEST  <br />
    **Content:** `{ message: "Nenhum produto encontrado com o titulo ${filter}!", error: true }` <br />
  OR <br />

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Erro ao buscar produtos por titulo.", error: true }`

### Pesquisar produto por descrição
  Retorna dados json sobre todos os produtos com a descrição solicitada.

* **URL** <br />
  /products/description

* **Method** <br />
  `GET`

*  **URL Query** <br />
  **Required:** <br />
   `?filter=[string]`

* **Success Response** <br />
  * **Code:** 200 <br />
    **Content:** <br />
      ```json
      [
        {
          "title": "Caneca",
          "price": "20",
          "description": "caneca personalizavel",
          "category": "caneca",
          "image": "https://media.istockphoto.com/photos/two-mug-ready-for-branding-picture-id152964864?b=1&k=20&m=152964864&s=170667a&w=0&h=_U5g6b9e9oi5zoCIIH0ox4jSfb0rJMQDltu7sUrD8F8="
        },
        {
          "title": "Caneca 1",
          "price": "20",
          "description": "caneca personalizavel",
          "category": "caneca",
          "image": "https://media.istockphoto.com/photos/two-mug-ready-for-branding-picture-id152964864?b=1&k=20&m=152964864&s=170667a&w=0&h=_U5g6b9e9oi5zoCIIH0ox4jSfb0rJMQDltu7sUrD8F8="
        }
      ]
      ```
* **Error Response** <br />
  * **Code:** 404 BAD REQUEST  <br />
    **Content:** `{ message: "Nenhum produto encontrado com a descrição ${filter}!", error: true }` <br />
  OR <br />

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Erro ao buscar produtos por descrição.", error: true }`
