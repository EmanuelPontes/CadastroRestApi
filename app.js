const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const consign  = require('consign');
const path = require('path');
const express = require('express');
const db = require('./database/db');

var app = express();

app.set("views", path.join(__dirname, "api/views"));
app.set("view engine", "ejs");

//configurar statics
app.use(express.static(path.join(__dirname, "public")));

//configurar middlewares
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

//utilizar consig para autoload
consign({cwd: 'api'})
  .include('controllers')
  .then('routes')
  .then('models')
  .into(app);

//Conectar com a database
db.createConnection();

module.exports = app;

