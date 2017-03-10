# new-structure

## Apresentação do Projeto

Essa é uma estrutura base para o desenvolvimento dos projetos na DZ Estudio. Clone este repositório para o seu local e siga os passos a seguir para instalação das dependências e para levantar o ambiente de desenvolvimento ([http://localhost:3000](http://localhost:3000))!

## Softwares necessários:

```
1 - Node.js
2 - NPM (incluso na versão Windows do Node.js)
```

## Instruções de como utilizar o projeto

1 - Para baixar as dependências de frontend.:

```
$ npm install
```

2 - Para rodar o projeto em [http://localhost:3000](http://localhost:3000):

```
$ gulp
```

## Outros comandos úteis 

* **`npm install --save-dev 'nomedependencia' `** - instala a dependência desejada 
* **`gulp css-compile`** - compila os arquivos ``*.SCSS`` da pasta SRC e redireciona para a dist 
* **`gulp css-minify`** - minifica os arquivos ``*.SCSS`` da pasta SRC e redireciona para a dist
* **`gulp js-compile`** - compila o ``*.JS`` da pasta SRC e redireciona para a dist
* **`gulp js-minify`** - minifica o ``*.JS`` da pasta SRC e redireciona para a dist
* **`gulp html`** - seleciona os arquivos ``*.HTML`` da pasta SRC e redireciona para a dist
* **`gulp js-rev`** - depois de compilar e minificar os arquivos ``*.JS``, a cada nova alteração ele cria um hash no nome do arquivo e atualiza no manifest, evitando o cache.
* **`gulp css-rev`** - depois de compilar e minificar os arquivos ``*.SCSS``, a cada nova alteração ele cria um hash no nome do arquivo e atualiza no manifest, evitando o cache.
* **`gulp build`** - executa as tasks de css-rev e js-rev  
* **`gulp image-minify`** - compacta as imagens da pasta src/images e coloca na dist/img
* **`gulp default`** - executa todas as tasks e levanta o ambiente (localhost)


## Construído com

* Node.js - Framework
* Gulp - Automatizador de Tarefas
* Browserify - Modularizador de Front-End
* Uglify - Minificador de JS
* UglifyCSS - Minificador de CSS
* BrowserSync - Servidor Local
* Sass - Preprocessador de CSS
* Gulp-concat - Concatenador de arquivos JS
* Gulp REV - Adiciona/atualiza um hash no nome do arquivo para evitar cache

## Desenvolvedoras:

Amanda Vieira e Helena Seferin