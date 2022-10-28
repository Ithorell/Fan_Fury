const path = require('path');
const express = require('express');
const app = express();
const session = require('express-session');
const routes = require('./routes');
const exphbs = require('express-handlebars');

const sequelize = require('./config/connection');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const PORT = process.env.PORT || 3008;

const hbs = exphbs.create({});

const sess = {
    secret: 'Authenication secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};