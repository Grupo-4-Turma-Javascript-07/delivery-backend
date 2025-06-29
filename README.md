# 🇧🇷 Plataforma de Delivery de Comida Brasileira – Projeto Integrador

Este projeto faz parte do **Desafio 2 – Backend** do Projeto Integrador Generation Brasil, com o objetivo de implementar uma plataforma de delivery focada na culinária brasileira. O backend foi desenvolvido utilizando **NestJS**, com três entidades relacionadas e funcionalidades completas de CRUD.

🔗 Repositório: [https://github.com/Grupo-4-Turma-Javascript-07/delivery-backend](https://github.com/Grupo-4-Turma-Javascript-07/delivery-backend)

---

## 📌 Descrição Geral

A aplicação simula um sistema de pedidos online de pratos típicos da culinária brasileira, permitindo o cadastro de usuários, categorias de pratos e os próprios pratos (produtos), além de uma funcionalidade extra de **recomendações saudáveis** implementada em TypeScript.

---

## 🧾 Entidades e Relacionamentos

### ✅ Usuário
- `id` (auto gerado)
- `nome` (string)
- `usuario` (e-mail)
- `foto` (URL opciona)
- `senha` (string)

### ✅ Categoria
- `id` (auto gerado)
- `categoria` (string)
- `descricao` (string)

### ✅ Produto
- `id` (auto gerado)
- `nome` (string)
- `descricao` (string)
- `preco` (decimal)
- `qtd_disp` (inteiro)
- `categoria` (muitos-para-um)
- `usuario` (muitos-para-um)

---

## 🔗 Relacionamentos

- Um produto pertence a **uma** categoria (N:1)  
- Um produto pertence a **um** usuário (N:1)

---

## 🛠️ Funcionalidades CRUD

- Cadastro, listagem, atualização e exclusão de **usuários**
- Cadastro, listagem, atualização e exclusão de **categorias**
- Cadastro, listagem, atualização e exclusão de **produtos**
- Busca de produtos por nome ou categoria

---

## ✨ Funcionalidade Especial

➡️ **Recomendações Saudáveis**  
Função extra que sugere pratos brasileiros mais saudáveis, usando lógica implementada em JavaScript puro no *service*.

---

## 💻 Tecnologias Utilizadas

- TypeScript  
- NestJS  
- TypeORM  
- MySQL  
- Insomnia (para testes)

---

## 🚀 Como Executar o Projeto

1. Clone o repositório:
```bash
git clone https://github.com/Grupo-4-Turma-Javascript-07/delivery-backend.git
````

2. Instale as dependências:

```bash
npm install
```

3. Configure o banco de dados no arquivo `.env` (um modelo está disponível no projeto)

4. Execute a aplicação:

```bash
npm run start:dev
```

---

## 🔍 Testes

Os testes podem ser feitos com **Insomnia**, importando as rotas e verificando as respostas do CRUD.

---

## 📚 Endpoints Principais

| Método | Rota                       | Descrição                     |
| ------ | -------------------------- | ----------------------------- |
| POST   | `/usuarios`                | Cadastrar usuário             |
| GET    | `/usuarios`                | Listar usuários               |
| POST   | `/categorias`              | Cadastrar categoria           |
| GET    | `/categorias`              | Listar categorias             |
| POST   | `/produtos`                | Cadastrar produto             |
| GET    | `/produtos`                | Listar produtos               |
| GET    | `/produtos/{id}`           | Buscar produto por ID         |
| PUT    | `/produtos/{id}`           | Atualizar produto             |
| DELETE | `/produtos/{id}`           | Excluir produto               |
| GET    | `/produtos/categoria/{id}` | Buscar produtos por categoria |

---

## 👥 Autores

* [@marinavarroo](https://github.com/marinavarroo)
* [@VanessaTargino](https://github.com/VanessaTargino)
* [@oligEdu](https://github.com/oligEdu)
* [@melcsilva](https://github.com/melcsilva)
* [@igorpardinho](https://github.com/igorpardinho)
* [@Juliotbr](https://github.com/Juliotbr)
* [@larissa-pinheiro](https://github.com/larissa-pinheiro)

---

Projeto desenvolvido em grupo como parte do aprendizado prático no bootcamp FullStack JavaScript da Generation Brasil.


