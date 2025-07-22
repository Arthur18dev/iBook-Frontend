# Projeto finalizado iBook

<img width="1896" height="919" alt="image" src="https://github.com/user-attachments/assets/6c632476-10af-4e26-8d5e-f6975fac56fb" />


Deploy do Frontend no GitHub Pages
Para publicar este projeto React no GitHub Pages, siga os passos abaixo:

1. Adicione o campo homepage no arquivo package.json
No seu package.json, inclua a linha abaixo (substitua pelo seu usuário e repositório):

"homepage": "https://Arthur18dev.github.io/iBook-Frontend",


2. Instale a dependência gh-pages
Execute no terminal:

npm install gh-pages --save-dev


3. Configure os scripts de deploy no package.json
Modifique a seção "scripts" para incluir os comandos abaixo:

"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}


4. Faça o deploy
Rode o comando:

npm run deploy
Este comando irá gerar a build otimizada do projeto e enviar para o branch gh-pages do repositório, ativando o GitHub Pages.


5. Acesse o site publicado
Seu site estará disponível em:

https://Arthur18dev.github.io/iBook-Frontend
