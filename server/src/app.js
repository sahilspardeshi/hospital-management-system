const express = require('express');
const AllRoutes = require('./router');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const App = express();

App.use(express.json());
App.use(cookieParser());
App.use(bodyParser.urlencoded({ extended: false }));
App.use('api',AllRoutes );
module.exports = App;