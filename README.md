# 💡 Let me Ask

Projeto web React para criação e visualização de salas, utilizando roteamento, gerenciamento de estado assíncrono e estilização moderna.

## 🛠️ Tecnologias e Bibliotecas

- **React**: Biblioteca principal para construção da interface.
- **React Router DOM**: Gerenciamento de rotas SPA.
- **@tanstack/react-query**: Gerenciamento de dados assíncronos (fetch, cache).
- **Tailwind CSS**: Estilização utilitária e customização via CSS variables.
- **class-variance-authority, clsx, tailwind-merge**: Utilitários para composição de classes CSS.
- **Radix UI**: Componentes acessíveis e utilitários de slot.
- **Lucide React**: Ícones SVG.
- **Vite**: Bundler e ambiente de desenvolvimento rápido.

## 🧩 Padrões de Projeto

- **Componentização**: Componentes reutilizáveis em `src/components`.
- **Separação de páginas**: Cada página em `src/pages`.
- **Estilização utilitária**: Tailwind CSS + variantes customizadas.
- **Gerenciamento de rotas**: SPA com React Router.
- **Gerenciamento de estado assíncrono**: React Query para chamadas à API.

## ⚙️ Setup e Configuração

1. **Instale as dependências**:

   ```sh
   npm install
   ```

2. **Inicie o ambiente de desenvolvimento**:

   ```sh
   npm run dev
   ```

## 📁 Estrutura de Pastas

- `src/`: Código-fonte principal
  - `components/`: Componentes reutilizáveis
  - `lib/`: Utilitários
  - `pages/`: Páginas da aplicação

## 📝 Observações

- Certifique-se de que o backend esteja rodando em `http://localhost:3333` para funcionamento das requisições.
- O projeto utiliza [Tailwind CSS](https://tailwindcss.com/) e [Vite](https://vitejs.dev/) para desenvolvimento rápido e estilização