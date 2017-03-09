# new-structure

## Apresentação do Projeto

Estrutura Base para os projetos

<!-- ## TODO:

- [x] Compilar e concatenar ```*.SCSS ``` para ```.CSS```;
- [x] Minificar os arquivos ```.CSS``` encontrados.;
- [x] Compilar e concatenar ```*.JS ``` para ```.JS```;
- [x] Minificar os arquivos ```.JS``` encontrados.;
- [x] Criar o ```REV``` para ```.CSS``` e ```.JS```;
- [ ] Criar tarefa de Build
- [ ] Minificar ```.HTML```
- [ ] Minificar Imagens
- [ ] Utilizar BrowserSync
- [ ] Utilizar SourceMaps
- [ ] Utilizar autoprefixer -->

## Softwares necessários:

```
1 - Node.js
2 - NPM (incluso na versão Windows do Node.js)
```

## Instruções de como utilizar o projeto

```
0 - "npm install"

1 - Após a instalação rode o comando "gulp"

```

## Construído com

* Node.js - Framework
* Gulp - Automatizador de Tarefas
* Browserify - Modularizador de Front-End
* Uglify - Minificador de JS
* UglifyCSS - Minificador de CSS
* BrowserSync - Servidor Local
* Sass - Preprocessador de CSS
* Gulp-concat - Concatenador de arquivos JS

## Desenvolvedoras:

Amanda Vieira e Helena Seferin


## Comandos úteis

Instalar dependencias
```sh
npm install --save-dev *`nomedependencia`*
```
```sh
gulp build -  compila os arquivos html, css rev e js rev
```
```sh
gulp css-compile - compila o css da pasta SRC e redireciona para a dist
```
```sh
gulp css-minify - minifica o css da pasta SRC e redireciona para a dist
```
```sh
gulp js-compile - compila o js da pasta SRC e redireciona para a dist
```
```sh
gulp js-minify - minifica o js da pasta SRC e redireciona para a dist
```
```sh
gulp html - seleciona os arquivos *html da pasta SRC e redireciona para a dist
```
```sh
gulp js-rev -
```
```sh
gulp css-rev - 
```
```sh
gulp image-minify - compacta as imagens da pasta SRC/images e coloca na dist/img
```
```sh
gulp default - executa todas as tasks e levanta o ambiente (localhost)
```


