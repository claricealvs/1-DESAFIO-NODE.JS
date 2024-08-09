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

2. Instale as Dependências

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

5. **Acesse a API no Swagger**

   A aplicação estará disponível no endereço:
   `http://localhost:`

## 🌐 Endpoints da API

Aqui estão alguns dos principais endpoints disponíveis na API:

- **Tutores**

  - `GET /tutors`: Lista todos os tutores com seus respectivos pets
  - `POST /tutor`: Cria um novo tutor
  - `GET /tutor/:id`: Consulta um tutor pelo ID
  - `PUT /tutor/:id`: Atualiza os dados de um tutor
  - `DELETE /tutor/:id`: Remove um tutor

- **Pets**
  - `GET /pets`: Lista todos os pets
  - `POST /pet/:tutorId`: Cria um pet e adiciona um tutor a ele
  - `PUT /pet/:petId/tutor/:tutorId`: Atualiza os dados de um pet
  - `DELETE //pet/:petId/tutor/:tutorId`: Remove um pet de um tutor
