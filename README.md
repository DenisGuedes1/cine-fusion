Este é um projeto Node.js construído com Express para criar uma API para gerenciar produtos, usuários e autenticação.

## Tecnologias Utilizadas
- Node.js
- Express
- Cors
- TypeORM
- JWT (JsonWebToken)
- Multer
- Nodemailer
- PostgreSQL
- TypeScript

## Funcionalidades
- Gerenciamento de produtos
- Autenticação de usuários com JWT
- Upload de imagens com Multer
- Envio de e-mails com Nodemailer
- Integração com banco de dados PostgreSQL usando TypeORM

## Como Começar
1. Clone o repositório: `git clone https://github.com/DenisGuedes1/nome-do-projeto.git`
2. Instale as dependências: `npm install`
3. Configure as variáveis de ambiente no arquivo `.env`
4. Execute o servidor de desenvolvimento: `npm run dev`
5. Execute as migrações do banco de dados: `npm run typeorm:migration:run`

## Estrutura do Projeto
- `src/`: Contém o código-fonte da aplicação.
  - `error/`: Gerenciamento de erros.
  - `router/`: Rotas da API.
  - `entity/`: Entidades do banco de dados.
  - `controller/`: Controladores da API.
  - `middleware/`: Middlewares da aplicação.
  - `services/`: Serviços da aplicação.
  - `utils/`: Utilitários diversos.
- `package.json`: Dependências e scripts.
- `.env`: Arquivo de configuração das variáveis de ambiente.

## Uso
- Certifique-se de ter o Node.js e o PostgreSQL instalados em seu sistema.
- Configure as variáveis de ambiente no arquivo `.env` conforme necessário.
- Execute o servidor de desenvolvimento: `npm run dev`

## Contribuição
1. Fork o repositório.
2. Crie um novo branch: `git checkout -b nome-da-feature`
3. Faça suas alterações e faça commit: `git commit -am 'Adicionar nova funcionalidade'`
4. Faça push para o branch: `git push origin nome-da-feature`
5. Envie um pull request.

## Licença
Este projeto está licenciado sob a Licença ISC - consulte o arquivo LICENSE.md para mais detalhes.