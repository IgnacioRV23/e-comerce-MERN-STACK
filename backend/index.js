//Exports.
require('dotenv').config()

const express = require('express');

const app = express();

const { ProductsAPI } = require('./src/products/index');

//Settings.
app.use(express.json());
app.set('port', process.env.PORT);

ProductsAPI(app);

//Server listen.
app.listen(app.get('port'), () => console.log(`Server listening on port: ${app.get('port')}`));