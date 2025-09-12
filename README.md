# 🌍 Tripass - CRUD de Países

Projeto desenvolvido em Next.js para consulta, detalhamento e cadastro de países, utilizando a Countries API. O sistema permite explorar informações detalhadas de cada país, com visual moderno, responsivo e foco em boas práticas de código.

---

## ✨ Funcionalidades

- 🔎 Busca e listagem de países
- 📄 Visualização de detalhes completos de cada país
- 🖼️ Mensagens de fallback para imagens ausentes (bandeira, emblema, localização)
- 🚫 Página de erro personalizada (not-found) estilizada com Tailwind
- ⚠️ Toast de erro para feedback de falhas na API
- ♻️ Componentes reutilizáveis e CSS Modules
- ℹ️ Página de informações da API utilizada

---

## 🛠️ Tecnologias Utilizadas

- [Next.js 15 (App Router)](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Axios](https://axios-http.com/)
- [Tailwind CSS](https://tailwindcss.com/) (apenas para a página not-found)
- CSS Modules (para todos os outros componentes)

---

## 📁 Estrutura de Pastas

```
projetoCRUD/
├── public/
│   ├── icons/
│   └── images/
├── src/
│   └── app/
│       ├── components/
│       │   ├── CountryCard/
│       │   ├── CountryDetail/
│       │   ├── ErrorToast.jsx
│       │   └── Header/
│       ├── entidade/
│       ├── apiinfo/
│       ├── not-found.jsx
│       ├── page.jsx
│       ├── layout.jsx
│       └── ...
├── package.json
└── ...
```

---

## 🌐 API Utilizada

- **Nome:** Countries API
- **Documentação:** [https://sampleapis.com/api-list/countries](https://sampleapis.com/api-list/countries)
- **URL base:** https://api.sampleapis.com/countries
- **Endpoint:** /countries
- **Atributos recebidos:**
  - id, name, abbreviation, capital, population, currency, phone
  - media: { flag, emblem, orthographic }

---

## 🚀 Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
4. **Acesse em:** [http://localhost:3000](http://localhost:3000)

---

## 🖥️ Principais Telas

- **Home:** Apresentação do projeto e navegação
- **Lista de Países:** Busca, listagem e navegação para detalhes
- **Detalhe do País:** Exibe todos os dados, imagens e fallback para ausências
- **Página de Erro (not-found):** Visual moderno, estilizado com Tailwind
- **Sobre a API:** Explicação detalhada da fonte dos dados

---

## 👩‍💻 Autoria

Desenvolvido por **Sophia Ellen dos Santos Balico**  
Turma 2TDS2 - SENAI
