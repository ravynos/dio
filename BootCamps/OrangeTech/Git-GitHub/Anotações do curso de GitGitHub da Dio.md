# Anotações do curso de GIT/GITHUB DIO

Criação de um repositorio git
** git init **

Comando ver todas as configurações do git
** git config --list **

Configurações iniciais de autor
** git config -- global user.email "email_do_autor" **
** git config --global user.name "nome_do_autor" **

Mudando a configuração padrão da branch no git
** git config --global init.defaultbranch nome_da_bransh **

Apagando configurações
** git config --global --unset user.email **
** git config --global --unset user.name **

Adicionar os arquivos para stage, para que possam ser commitados
** git add * **

Realizando o commit, preparando os arquivos para serem empurados para o github
** git commit -m "mensagem explicativa do commit" **

Configurando a referencia das pasta com o repositorio remoto (GITHUB)
** git remote add origin URL OU CHAVE SSH DO REPOSITORIO **

Visualizando a lista de repositorios remotos referentes a esta pasta.
** git remote -v **