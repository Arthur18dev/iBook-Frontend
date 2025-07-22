# Projeto finalizado iBook

<img width="1896" height="919" alt="image" src="https://github.com/user-attachments/assets/6c632476-10af-4e26-8d5e-f6975fac56fb" />


1. Deploy do iBook-Frontend com GitHub Pages

Instale o pacote:

npm install gh-pages --save-dev


2. No package.json, adicione:

"homepage": "https://SEU_USUARIO.github.io/iBook-Frontend",


3. Adicione esses scripts:

"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"  // ou -d build, dependendo do projeto
}
Modifique a seção de scripts para incluir os comandos de deploy:

"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}


4. Faça o build e deploy:

npm run deploy
