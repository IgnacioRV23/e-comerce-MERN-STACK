//Exports.
require('dotenv').config()

const express = require('express');

const cors = require('cors');

const app = express();

const { ProductsAPI } = require('./src/products/index');

//Settings.
app.use(cors());
app.use(express.json());
app.set('port', process.env.PORT);

ProductsAPI(app);

//Server listen.
app.listen(app.get('port'), () => console.log(`Server listening on port: ${app.get('port')}`));