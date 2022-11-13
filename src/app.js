const express = require('express');
const db = require('./utils/database');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT;

db.authenticate()
  .then(() => console.log('Autenticación exitosa'))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(() => console.log('Base sincronizada'))
  .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
})