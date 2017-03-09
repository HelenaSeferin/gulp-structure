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
- instala a dependência desejada 

gulp build 
- compila os arquivos *.HTML, *.CSS rev e *.CSS  rev

gulp css-compile 
- compila o css da pasta SRC e redireciona para a dist

gulp css-minify 
- minifica o css da pasta SRC e redireciona para a dist

gulp js-compile 
- compila o js da pasta SRC e redireciona para a dist

gulp js-minify 
- minifica o js da pasta SRC e redireciona para a dist

gulp html 
- seleciona os arquivos *html da pasta SRC e redireciona para a dist

gulp js-rev 
- depois de compilar e minificar o *.JS, a cada nova alteração ele cria um hash no nome do arquivo e atualiza no manifest, evitando o cache.

gulp css-rev 
- depois de compilar e minificar o *.CSS, a cada nova alteração ele cria um hash no nome do arquivo e atualiza no manifest, evitando o cache.

gulp image-minify 
- compacta as imagens da pasta SRC/images e coloca na dist/img

gulp default 
- executa todas as tasks e levanta o ambiente (localhost)
```


