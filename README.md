<p align="center">
  <img src="https://softdesign.com.br/wp-content/themes/bones/library/images/logotipo.svg" alt="Softdesign logo" />
</p>

# :rocket: React quickstart

Esse projeto foi criado com base no [Create React App](https://github.com/facebook/create-react-app) utilizando o template de **typescript**.

`$ yarn create react-app my-app --template typescript`

Esse projeto contém todos os scripts do próprio [Create React App](https://github.com/facebook/create-react-app) com configurações adicionais de [eslint](https://eslint.org/), [prettier](https://prettier.io/), [stylelint](https://stylelint.io/) e [husky](https://typicode.github.io/husky/#/).

### :wink: Antes de iniciar o projeto

Verifique se o NodeJS instalado em sua máquina está na versão 14 ou superior. Digite no terminal o seguinte comando:

`$ node -v`

Mais informações: [site oficial](https://nodejs.org/en/).

Verifique se você tenha o yarn instalado em sua máquina. Digite no terminal o seguinte comando:

`$ yarn -v`

Caso não tenha, instale usando o comando no terminal `$ npm install -g yarn` e pule para o próximo passo.

Mais informações: [site oficial](https://yarnpkg.com/).

### :fire: Iniciando o projeto

Clone esse repositório utilizando o comando abaixo no seu terminal:

`$ git clone https://github.com/SoftdesignBrasil/quickstart-react.git`

Após o processo ser concluído no próprio terminal aberto localize a pasta que você acabou de clonar e dentro dela digite:

`$ yarn install`

Quando concluir a instalação das dependências, abra o projeto no seu editor, crie um arquivo `.env` com as mesmas informações do `.env.example` e peça as infomações com alguém da sua equipe para popular as variáveis.

Após realizar essas alterações, digite no seu terminal `$ yarn start` e aguarde o seu projeto iniciar. :smile:

### :star: Configurações principais

- **Eslint + Airbnb JavaScript Style Guide:**
  Um dos style guide mais famosos do mundo referência para várias empresas.

  Mais informações: [site oficial](https://github.com/airbnb/javascript).

- **Prettier:**
  Formatador de código que tem suporte com a maioria dos editores.

  Mais informações: [site oficial](https://prettier.io/).

- **EditorConfig:**
  Ajuda a manter estilos de codificação consistentes para vários desenvolvedores trabalharem no mesmo projeto e em diferentes editores.

  Mais informações: [site oficial](https://editorconfig.org/).

- **Husky com hook pre-commit:**
  Previne commits fora do padrão realizando o comando de eslint, prettier e teste antes de commitar suas alterações para validar se está tudo ok.

  Mais informações: [site oficial](https://typicode.github.io/husky/#/).

- **TSConfig:**
  Especifica os arquivos raiz e as configurações de compilação necessárias para o projeto.
  **Observação**: Está na configuração padrão do [Create React App](https://github.com/facebook/create-react-app).

- **React router dom v5:**
  Biblioteca completa para controle de rotas.

  Mais informações: [site oficial](https://v5.reactrouter.com/web/guides/quick-start).

- **Brazilian utils:**
  Biblioteca com foco na resolução de problemas que enfrentamos diariamente no desenvolvimento de aplicações para o business brasileiro.

  Mais informações: [site oficial](https://brazilian-utils.com.br/#/getting-started).

- **Axios:**
  Axios é um cliente HTTP baseado em Promises para fazer requisições. Pode ser utilizado tanto no navegador quanto no Node.js ou qualquer serviço de API.

  Mais informações: [site oficial](https://axios-http.com/).

- **Date fns:**
  Biblioteca com utilitários para tratamento de datas.

  Mais informações: [site oficial](https://date-fns.org/).

- **Style lint:**
  Padroniza o desenvolvimento de códigos CSS e ajuda a evitar erros.

  Mais informações: [site oficial](https://stylelint.io/).

- **React input mask:**
  Componente de máscaras para inputs.

  Mais informações: [site oficial](https://github.com/sanniassin/react-input-mask).

- **Yup:**
  Biblioteca que auxilia na validação de valores.

  Mais informações: [site oficial](https://www.npmjs.com/package/yup).

- **Formik:**
  Biblioteca para auxiliar a criação de formulários, combinado junto ao yup.

  Mais informações: [site oficial](https://www.npmjs.com/package/yup).

### :computer: Configurações VSCode

- Atualmente existe uma pasta **.vscode** de configurações para o editor visual studio code. No momento está aplicando somente a formatação ao salvar.

Instalar as extensões no seu **visual studio code**:

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig).

- [ENV](https://marketplace.visualstudio.com/items?itemName=IronGeek.vscode-env).

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens).

## :art: Configurações de SCSS e layout

- **Node sass:**
  Popular pré-processador de folhas de estilos.

  Mais informações: [NPM](https://www.npmjs.com/package/node-sass) / [site oficial](https://sass-lang.com/).

- **Bootstrap:**
  Biblioteca de estilos para criar sites de forma rápida e responsiva.

  Mais informações: [site oficial](https://getbootstrap.com/docs/5.1/getting-started/introduction/).

- **React bootstrap:**
  É uma biblioteca que nos oferece os componentes Bootstrap construídos em React.

  Mais informações: [site oficial](https://react-bootstrap.github.io/).

- **React icons:**
  Biblioteca que nos oferece ícones de diversas bibliotecas de CSS em forma de componentes.

  Mais informações: [npm](https://www.npmjs.com/package/react-icons) / [Lista de ícones](https://react-icons.github.io/react-icons/).

- **Classnames:**
  Uma pequena biblioteca utilizada para unir classnames em tags HTML.

  Mais informações: [site oficial](https://www.npmjs.com/package/classnames).

## :rotating_light: Configurações de notificações

- **React toastify:**
  Biblioteca simples e de fácil personalização para criação de toasts/alerts customizados.

  Mais informações: [site oficial](https://fkhadra.github.io/react-toastify/introduction).

## :post_office: Configurações de deploy

Dentro da pasta **k8s** vai ter subpastas com os nomes dos ambientes. Nestas pastas irá possuir um yaml que deve ser alterado para o nome dos projetos. Encontre o arquivo `web-deployment.example` e renomeie para `web-deployment.yaml`. Após realizar essa alteração faça as seguintes alterações:

Alterar todas as ocorrências de **nome_do_projeto** e **sigla_do_projeto** para os valores do seu projeto atual. Exemplo de uso:

```
name: sca-deployment-develop
namespace: sca
```

## :books: Links úteis para estudos

O projeto utiliza em diversas partes unidade de CSS **rem**. Abaixo alguns sites para auxilio:

- [Conversor de px para rem](https://nekocalc.com/px-to-rem-converter).
- [Unidades modernas de css](https://desenvolvimentoparaweb.com/css/unidades-css-rem-vh-vw-vmin-vmax-ex-ch/).

O CSS do projeto está escrito com **BEM**, mais informações a respeito desse padrão:

- [BEM: guia definitivo do padrão CSS mais famoso](https://desenvolvimentoparaweb.com/css/bem/).
- [BEM em 5min](https://medium.com/trainingcenter/bem-em-5min-f5c80fd23439).

Sobre typescript:

- [Typescript documentação](https://www.typescriptlang.org/docs/).
- [React typescript](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup).
