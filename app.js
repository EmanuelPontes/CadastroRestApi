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
app.use(express.static(path.join(__dirname, "public/stylesheets")));
app.use(express.static(path.join(__dirname, "public/json")));
app.use(express.static(path.join(__dirname, "public/js")));

//configurar middlewares
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

//utilizar consig para autoload
consign({cwd: 'api'})
  .include('controllers')
  .then('routes')
  .then('models')
  .then('lib')
  .into(app);

//Conectar com a database
var database = db.CreateConnection();

database.then( 
    () => {
        var config = require('config'); 
        var dbUrl = config.get("database.url");
        var dbName = config.get("database.options.dbname");
        console.log("connected to " + dbUrl + "/" + dbName);
    },
    (err) => {
        console.log(err);
    });
module.exports = app;

