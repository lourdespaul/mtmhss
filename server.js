const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const hbs = require('hbs');
const path = require('path');

const dbConnection = require('./database/config');

const home = require('./routes/home');
const clas = require('./routes/clas');
const register = require('./routes/register');
const sms = require('./routes/sms');

mongoose.Promise = global.Promise;

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.set('view options', { layout: 'layout' });

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, './node_modules/materialize-css/dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/',home);
app.use('/class', clas);
app.use('/register', register);
app.use('/sms', sms);

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});