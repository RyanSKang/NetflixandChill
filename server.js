// Defining Dependencies
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers/');
const apiRoutes = require('./controllers/api');
const sequelize = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Using Routes in our controllers
app.use(routes);
app.use(apiRoutes);

// Console logging npm start success
app.listen(PORT, () => console.log('Now listening'));

