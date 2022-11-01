const path = require('path');
const express = require('express');
const app = express();
const session = require('express-session');
const routes = require('./controllers');
const exphbs = require('express-handlebars');

const sequelize = require('./config');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const PORT = process.env.PORT || 3008;

const hbs = exphbs.create({});

const sess = {
    secret: 'Authentication secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: Sequelize
    })
};

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sess));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () =>
      console.log(
        `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
      )
    );
  });

