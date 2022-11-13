const express = require('express');
const initModels = require('./models/initModels');
const db = require('./utils/database');

require('dotenv').config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8000;

db.authenticate()
  .then(() => console.log('Autenticación exitosa'))
  .catch((error) => console.log(error));

db.sync({ force: true })
  .then(() => console.log('Base sincronizada'))
  .catch((error) => console.log(error));

initModels();

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});