require('dotenv').config()

const express = require('express');

const app = express();

app.use(express.json());

app.set('port', process.env.port);

app.listen(app.get('port'), () => console.log(`Server listening on port: ${app.get('port')}`));