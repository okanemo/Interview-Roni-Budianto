require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const routeNav = require('./src');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());
app.use(morgan('dev'));

app.listen(
  process.env.SERVER_PORT || 3001,
  process.env.SERVER_ADDRESS || '127.0.0.1',
  function () {
    console.log('Terkoneksi');
  }
);

app.use('/', routeNav);
