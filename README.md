<h1 align="center"> 💰 Coins Master 💰 </h1>

<p align="center" >
  <a href="#projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#requisitos">Como rodar</a>
</p>

<span id="projeto">

# :bookmark_tabs: Sobre o projeto
Uma forma fácil de distribuir moedas do API (Aprendizagem por Projetos Integradores)!
- Projeto desenvolvido para a disciplina de Programação para Dispositivos Móveis na FATEC de São José dos Campos

<div align="center">
  <img alt="Demonstração do aplicativo Coins Master" src="..." width="230px" />
</div>

### :hammer_and_wrench: Tecnologias e ferramentas
- [Figma](http://www.figma.com/), [React Native](https://reactnative.dev/), [TypeScript](https://www.typescriptlang.org/)
  
### Funcionalidades
- [X] Criar, entrar e gerenciar equipes baseadas em SCRUM (no modelo FATEC)
- [X] Criar usuários (que pertencerão a times)
- [X] Distribuição de moedas do API
  - [X] Adição das moedas conquistadas ao final de cada sprint
	- [ ] Push notification para lembretes de avaliação ao final das sprints
	- [X] Avaliação dos integrantes para distribuição das moedas, também sendo possível enviar feedbacks individuais
- [X] Atualização de dados de usuários e equipes
- [X] Exclusão de conta e de equipes
- [X] Histórico de avaliação de cada integrante do grupo
- [ ] Geração de relatório da sprint (em um excel) para professores

<span id="requisitos">

## :gear: Como rodar
Antes de começar, você vai precisar ter instalado o Node.js (confira um tutorial
[aqui](https://www.notion.so/Instala-o-das-ferramentas-405f3e8b014649cbb422dee6b5bd0535)), 
algum emulador e para clonar esse repositório o [Git](https://git-scm.com/) também!

```bash
# Clone este repositório
$ git clone https://github.com/MariaGabrielaReis/coins-master.git

# Acesse a pasta do projeto
$ cd coins-master

# Instale as dependências e tipagens necessárias
$ npm install

# Inicie o projeto
$ npx react-native run-android
```

> 💡 Agora o aplicativo será aberto no emulador de sua preferência.

### Estrutura de pastas

```bash
📂 coins-master
|- 📁 .bundle
|- 📁 android
|- 📁 ios
|- 📁 src
|--- 📁 @types
|--- 📁 assets
|--- 📁 components
|--- 📁 global
|--- 📁 navigation
|--- 📁 screens
|--- 📁 services
|--- 📁 utils
|----- 📁 interfaces
|----- 📁 requests
|- 📄 .eslintrc.json
|- 📄 .gitignore
|- 📄 .prettierrc.js
|- 📄 app.json
|- 📄 App.tsx
|- 📄 babel.config.js
|- 📄 index.js
|- 📄 metro.config.js
|- 📄 package.json
|- 📄 tsconfig.json
```

[![image](https://img.shields.io/badge/✨%20Maria%20Gabriela%20Reis,%202022-LinkedIn-009973?style=flat-square)](https://www.linkedin.com/in/mariagabrielareis/)
 