# API Project

## Instruções de Instalação e Configuração

Este documento fornece todas as instruções necessárias para configurar e executar o projeto localmente.

### Pré-requisitos

1. **Node.js**:
   - Este projeto utiliza a versão `v20.16.0` do Node.js. Recomenda-se o uso do **nvm** (Node Version Manager) para gerenciar a versão do Node.
   - Caso ainda não tenha o nvm instalado, siga os passos abaixo:

     **Para Linux/Mac:**
     ```bash
     curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
     ```
     Após a instalação, reinicie seu terminal e verifique se o nvm foi instalado corretamente:
     ```bash
     nvm --version
     ```

     **Para Windows:**
     Use o [nvm-windows](https://github.com/coreybutler/nvm-windows) para instalar o nvm no Windows.

2. **Git**:
   - Certifique-se de que o Git está instalado. Caso não esteja, [baixe aqui](https://git-scm.com/).

### Passos para Configuração

1. **Clonar o Repositório**
   ```bash
   git clone https://github.com/RodrigoSerrasqueiro/tasks-manager-api.git
   cd task-manager-api
   ```

2. **Configurar a Versão do Node**
   - Certifique-se de que está utilizando a versão correta do Node conforme especificado no arquivo `.nvmrc`.
   ```bash
   nvm install
   nvm use
   ```

3. **Instalar Dependências**
   - Após configurar a versão correta do Node, instale as dependências do projeto:
   ```bash
   npm install
   ```

4. **Configurar Variáveis de Ambiente**
   - Crie um arquivo `.env` na raiz do projeto com base no arquivo `.env.example`. O `.env.example` contém os nomes das variáveis de ambiente necessárias. Certifique-se de preencher as variáveis corretamente para o funcionamento do projeto.

     **Exemplo:**
     ```
     HOST_DATABASE=database-name
     PORT=3000
     ```

5. **Executar o Projeto**
   - Para iniciar o projeto em ambiente de desenvolvimento, execute o comando abaixo:
   ```bash
   npm run dev
   ```

   O projeto estará acessível no endereço [http://localhost:3000](http://localhost:3000) (ou a porta definida na variável de ambiente `PORT`).

### Recursos Adicionais

- **Scripts Disponíveis:**
  - `npm run dev`: Inicia o servidor em modo de desenvolvimento.
  - `npm run build`: Compila o projeto para produção.
  - `npm start`: Inicia o servidor em produção após a compilação.

- **Testes:**
  Caso o projeto contenha testes automatizados, eles podem ser executados com o comando:
  ```bash
  npm test
  ```

### Suporte
Se encontrar algum problema, sinta-se à vontade para abrir uma **issue** no repositório ou entre em contato diretamente com o mantenedor do projeto.
