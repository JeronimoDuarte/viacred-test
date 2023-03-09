# Viacred test

Para rodar este teste siga os seguintes passos:

1- Abra um terminal e navegue até o diretório viacred-test
# ############ BUILD 
2- com o docker instalado rode o comando:
  docker build -t viacred-test .
  Isto vai criar uma instancia docker com servidor nginx e o frontend angular buildado

# ############### RUN
3- Para rodar o frontend e poder ver as páginas no terminal, dentro do diretório via cred rode o seguinte comando:
    docker run -p 8040:80  viacred-test
# ############ MOCKUP API
4- Para simular a requisição de um dado para uma api, ainda no terminal e dentro do diretório viacred-test faça os seguintes passos
  # instalar dependecias node
  a)  cd mockapi
  b) npm install
  # rodar fake api
  c) npm run mock:server



  # RODANDO FRONTEND SEM DOCKER
  a) tendo o nodejs instalado execute no terminal o seguinte comando:
     npm install -g @angular/cli@14.2.0
  b) pelo terminal vá até o diretório viacred-test e execute o seguinte comando:
     npm install
  c) para rodar o frontend e poder abrir no navegador, pelo terminal, ainda dentro do diretório viacred-test execute o comando:
   ng serve
   - Você pode acessar a página pela url http://localhost:4200
  