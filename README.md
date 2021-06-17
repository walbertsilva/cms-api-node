## API CMS

#### Essa API faz parte do PROGRAMA DE DESENVOLVIMENTO DA LABS. Ela foi criado para fins didaticos. A mesma serve para treinar e por em pratica os conhecimentos básicos do AngularJS.  

#### CONFIGURAÇÃO DO MONGO

1. Acessar o site oficial https://www.mongodb.com/try?jmp=nav#community e baixar o Mongo.
2. Clique no menu superior em Software > Community Server e busque a versão do Community Server mais recente para o seu sistema operacional.
3. Baixe e instale o Mongo em sua maquina.
4. Pelo prompt de comando, entre na subpasta bin dentro da pasta de instalação do seu MongoDB e digite o comando: mongod --dbpath c:\cms\data, onde c:\cms\data é o caminho onde está esse projeto.
5. O comando anterior irá iniciar o servidor do Mongo. Se não der nenhum erro no terminal, o MongoDB está pronto e está executando corretamente.

#### DEVELOPMENT SERVER 

1.  Eecute o camando npm install e aguarde o gerenciado baixar todas as dependencias.
2. Com o fim da etapa anterior execute npm start.
3. Navegue para http://localhost:3000/api-docs/
