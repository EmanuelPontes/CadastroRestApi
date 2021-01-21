const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const consign  = require('consign');
const path = require('path');
const express = require('express');
const db = require('./database/db');
const favicon = require('serve-favicon');
var app = express();


app.set("views", path.join(__dirname, "api/views"));
app.set("view engine", "ejs");

//configurar statics
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public/stylesheets")));
app.use(express.static(path.join(__dirname, "public/stylesheets/fonts-awesome-free-5.15.1/")));
app.use(express.static(path.join(__dirname, "public/stylesheets/fonts-awesome-free-5.15.1/")));
app.use(express.static(path.join(__dirname, "public/json")));
app.use(express.static(path.join(__dirname, "public/js")));
app.use(express.static(path.join(__dirname, "public/js/fonts-awesome-free-5.15.1/")));

app.use(express.static(path.join(__dirname, 'public','images')));

//configurar middlewares
app.use(favicon(path.join(__dirname, 'public','images', 'favicon.ico')));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.locals.sessionTokens = [];

//utilizar consig para autoload
consign({cwd: 'api'})
  .include('controllers')
  .then('routes')
  .then('models')
  .then('lib')
  .into(app);

//Conectar com a database
// var database = db.CreateConnection().then(()=>{
//   db.Drop();
// });

var database = db.CreateConnection();

module.exports = app;

