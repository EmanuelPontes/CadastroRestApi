const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const consign  = require('consign');
const express = require('express');

var appTest = express();

//configurar middlewares
appTest.use(express.urlencoded({extended: true}));
appTest.use(bodyParser.json());
appTest.use(cookieParser());

//utilizar consig para autoload
consign({cwd: 'api'})
  .include('controllers')
  .then('routes')
  .then('models')
  .then('lib')
  .into(appTest);

module.exports = appTest;
