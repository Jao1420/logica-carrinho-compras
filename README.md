# 🛒 E-commerce Logic Core (Node.js)

Este repositório foi desenvolvido como parte do módulo de **Node.js** do curso de **Desenvolvimento Mobile** da **DIO.me**.  
O objetivo do projeto é implementar a **lógica central de um carrinho de compras**, com foco em **organização, escalabilidade e boas práticas de backend**.

---

## 📌 Objetivo do Projeto

Construir a inteligência de um carrinho de compras, permitindo:
- Adicionar itens
- Remover itens
- Calcular o valor total
- Manter uma estrutura modular e fácil de expandir

---

## 🧠 Conceitos e Competências Aplicadas

### 🛠️ Modularização
- Separação clara de responsabilidades
- Funções organizadas em serviços independentes (`items` e `cart`)
- Código mais reutilizável e de fácil manutenção

### 🧮 Lógica de Negócio
- Implementação das regras do carrinho de compras
- Controle de quantidades e valores
- Cálculo dinâmico do total

### ⚙️ Backend Essentials
- Uso do **Node.js**
- Manipulação de estruturas de dados (arrays e objetos)
- Funções puras e bem definidas

### 📦 Ambiente e Ferramentas
- Configuração de scripts via **NPM**
- Gerenciamento de dependências
- Organização de projeto seguindo boas práticas

---

## 📂 Estrutura do Projeto

```bash
logica-carrinho-compras/
├── src/
│   ├── services/
│   │   ├── items.js
│   │   └── cart.js
│   └── index.js
├── package.json
└── README.md
