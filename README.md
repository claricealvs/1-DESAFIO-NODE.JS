# 🐱 PetsClinic - API de Gerenciamento de Clínica Veterinária

## 🛠️ Tecnologias Utilizadas

<div>
<img align="center" alt="Jv-csharp" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" /> 
<img align="center" alt="Jv-csharp" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodemon/nodemon-original.svg" /> 
<img align="center" alt="Jv-csharp" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />
<img align="center" alt="Jv-csharp" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
<img align="center" alt="Jv-csharp" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-plain-wordmark.svg" />
<img align="center" alt="Jv-csharp" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg" />
</div>

## 🚀 Como Executar o Projeto

### Pré-Requisitos

- Node.js
- Git
- Editor de Código

### Passos para Execução

1. **Clone o Repositório**

```bash
https://github.com/claricealvs/1-DESAFIO-NODE.JS.git
cd 1-DESAFIO-NODE.JS
```

2. **Instale as Dependências**

```bash
npm install
```

3. **Configure o Banco de Dados**

Crie um banco de dados no MySQL e ajuste as configurações de conexão no arquivo `conn.js`:

```javascript
const sequelize = new Sequelize("petsclinic", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
```

4. **Compile e Execute a Aplicação**

- Use o Editor de Código de sua preferência

- Execute a aplicação em modo de desenvolvimento
  ```bash
  npm run dev
  ```
- O servidor inciará na porta:3000 - acesse <http://localhost:3000>

## 🛠️ ferramenta para testes

- Postman

## 🌐 Endpoints da API

Aqui estão os endpoints disponíveis na API:

<details>
<summary> GET </summary>

Listar todos os tutores `/tutors`. Exemplo de resposta:

```JSON
[
  {
    "id": 1,
    "name": "Clarice",
    "phone": "999445566",
    "email": "clarice@gmail.com",
    "date_of_birth": "29/04/2003",
    "zip_code": "7580000",
    "Pets": [
      {
        "id": 1,
        "name": "Maddie",
        "species": "cat",
        "carry": "m",
        "weight": 2,
        "date_of_birth": "03/09/2018"
      }
    ]
  }
]
```

Listar todos os pets `/pets`. Exemplo de resposta:

```JSON
[
  {
    "id": 1,
    "name": "Maddie",
    "species": "Cat",
    "carry": "M",
    "weight": 2.5,
    "date_of_birth": "03/11/2018",
    "TutorId": 1
  },
  {
    "id": 12,
    "name": "Coraline",
    "species": "Bunny",
    "carry": "p",
    "weight": 2,
    "date_of_birth": "08/07/2023",
    "TutorId": 1
    }
]
```

Listar um tutor por id `/tutor/:id`. Exemplo de resposta:

```JSON
{
  "tutor": {
      "id": 8,
      "name": "John",
      "phone": "969235485",
      "email": "john@gmail.com",
      "date_of_birth": "21/03/2000",
      "zip_code": "75790000",
      "Pets": [
        {
          "id": 13,
          "name": "Butter",
          "species": "Dog",
          "carry": "g",
          "weight": 8,
          "date_of_birth": "23/06/2016",
          "TutorId": 8
        }
      ]
  }
}
```

</details>

<details>
<summary> POST </summary>

`/tutor` Exemplo do body de requisição (todos os itens são obrigatórios):

```JSON
{
    "name": "John",
    "date_of_birth": "11/01/2005",
    "phone": "999664422",
    "email": "john@gmail.com",
    "zip_code": "75790000"
}
```

`/pet/:tutorId` Exemplo do body de requisição (todos os itens são obrigatórios):

```JSON
{
  "TutorId": "1",
  "name": "Luna",
  "species": "Dog",
  "carry": "m",
  "weight": "4",
  "date_of_birth": "10/02/2024"
}
```

</details>

<details>
<summary> PUT </summary>

`/tutor/:id` Exemplo do body de requisição (todos os itens são obrigatórios):

```JSON
{
  "id": "8",
  "name": "John",
  "phone": "969235485",
  "email": "john@gmail.com",
  "date_of_birth": "21/03/2000",
  "zip_code": "75790000"
}
```

`/pet/:petId/tutor/:tutorId` Exemplo do body de requisição (todos os itens são obrigatórios):

```JSON
{
    "name": "Butter",
    "species": "Dog",
    "carry": "g",
    "weight": "8",
    "date_of_birth": "23/06/2016"
}
```

</details>

<details>
<summary> DELETE </summary>

`/tutor/:id`

> status code 204

`/pet/:petId/tutor/:tutorId`

> status code 204

</details>
