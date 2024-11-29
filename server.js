const express = require('express');
const app = express();
const port = 3000;
const routes = require('./api/routes'); 


app.use(express.json());
app.use('/', routes);


app.listen(port, () => {
  console.log(`Servidor rodando na porta 3000`);
});