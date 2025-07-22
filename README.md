# Projeto finalizado iBook

<img width="1896" height="919" alt="image" src="https://github.com/user-attachments/assets/6c632476-10af-4e26-8d5e-f6975fac56fb" />


O que eu fiz 

🚀 Deploy do Frontend no GitHub Pages
Para publicar este projeto React no GitHub Pages, siga os passos abaixo:</br>

🌐 Clonando o frontend
Se quiser testar o sistema completo com interface gráfica, clone também o repositório do frontend:</br>

git clone https://github.com/Arthur18dev/iBook-Frontend.git
Acesse o README do frontend para ver como rodar ou publicar a aplicação no GitHub Pages.

1. 🏠 Adicione o campo homepage no arquivo package.json
No seu package.json, inclua a linha abaixo (substitua pelo seu usuário e repositório):

"homepage": "https://Arthur18dev.github.io/iBook-Frontend",


2. 📦 Instale a dependência gh-pages
Execute no terminal:

npm install gh-pages --save-dev


3. 🛠️ Configure os scripts de deploy no package.json
Modifique a seção "scripts" para incluir os comandos abaixo:

"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
},


4. 🚩 Faça o deploy
Rode o comando:

npm run deploy
Este comando irá gerar a build otimizada do projeto e enviar para o branch gh-pages do repositório, ativando o GitHub Pages.

5. 🌐 Acesse o site publicado
Seu site estará disponível em:

https://Arthur18dev.github.io/iBook-Frontend


⚠️ Atenção: Backend necessário
Para que todas as informações e funcionalidades apareçam corretamente no frontend, é necessário que o backend esteja rodando.

Para iniciar o backend localmente, navegue até a pasta do backend e execute:

npm start
Isso vai iniciar o servidor backend, permitindo que o frontend se comunique com ele.

Se o backend não estiver rodando, algumas funções e dados do site podem não funcionar corretamente.
