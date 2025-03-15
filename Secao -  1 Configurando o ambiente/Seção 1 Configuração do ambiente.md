# Curso Javascript-Typescript Udemy

## Configuração do ambiente

Instalação;

* Node js;

* VSCode;

* Google Chrome;

Já de inicio instalamos uma extenção para o Node.js, para fazer a ponte entre o código digitado e o nodejs para ele executar os scripts, dessa maneira iremos conseguir executar os script's direto do vscode.

* Extenção code runner;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-13%2018-41-26.png)

Já criamos uma pasta geral que irá englobar todo o curso.

Por questão de organização, tentaremos criar para cada aula uma pasta especifica para aquela aula, assim deixando mais organizado o projeto.

Por conta da quantidade de pastas o projeto tende a ficar desorganizado e confuso, para melhorar isso podemos usar uma maneira de acessar cada aula individualmente. 

* Criamos um arquivo JS, um index.js dentro da pasta aula1;

* Criamos um arquivXo app.js na mesma pasta;

Criados esses arquivos de teste, podemos abrir cada pasta independente acessando o file/opemfolder/ e escolher a pasta especifica dentro da pasta geral do projeto.

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-13%2018-54-35.png)

A nível de teste digitamos, dentro do arquivo aula1.js o seguinte código;

* console.log(), com um hello word para teste;

* Savamos o arquivo e clicamos no botão de play no canto direito do vscode;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-13%2019-03-41.png)

Como resultado temos a mensagem exibida no terminal.

A extenção que instalamos faz essa ponte entre o arquivo que digitamos e o terminal, que é onde o arquivo js é executado, isso apenas através do botão play no canto da tela.

O resultado do código será exibido em output ou saída.

```
carlos@carlos:~/CursoJS/aula1$ node app.js
Hello world!!
carlos@carlos:~/CursoJS/aula1$ 
```

Podemos também executar o mesmo arquivo digitando o comando no terminal do vscode;

```
carlos@carlos:~/CursoJS/aula1$ node app.js
Hello world!!
carlos@carlos:~/CursoJS/aula1$ 
```

Podemos também executar qualquer arquivo javascript podemos abrir o navegador, ir em inspecionar/console e executar códigos javascript dentro dessa aba.

Como exemplo executamos um olá mundo dentro do console do chrome;

```
console.log("Olá mundo!!");
```

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-13%2019-17-16.png)

## Instalação no Ubuntu

Programas a serem instalados;

* VSCode;

* Google Chrome;

* Node JS;

Podemos usar o script para fazer a instalação de todos os programas;

* Atualizando pacotes

```
sudo apt update -y
```

* NodeJS - REMOVE O NODE ANTERIOR (se existir)

```
sudo apt purge --auto-remove nodejs -y
sudo rm /etc/apt/sources.list.d/nodesource.list*
```

* INSTALA O CURL

```
sudo apt install curl -y
```

* BAIXA E INSTALA O NODE 12

```
curl -sL https://deb.nodesource.com/setup_12.x | sudo bash -
sudo apt install nodejs -y
```

* VSCode

```
sudo snap install code --classic
```

* Google Chrome

```
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i google-chrome-stable_current_amd64.deb
sudo rm google-chrome-stable_current_amd64.deb
```

* npm é um instalador de pacotes do node

Tendo o arquivo .txt podemos instalar todos esses programas de uma só vez com o seguinte comando no terminal;

```
/bin/bash instalacao_ubuntu.txt
```

Após isso irá solicitar a senha sudo, após isso irá instalar tudo de uma vez.

*<u>Criação das pastas e exemplos iguais já feitos acima.</u>*

Então como já está criada a pasta aula2, usamos essa como exemplo.

* Instalamos a extenção coderunner no vscode;    
