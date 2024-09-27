const express = require('express');
const AuthRoutes = require('../routes/auth.routes');
const AllRoutes = express();
AllRoutes.use('/login',AuthRoutes);
module.exports = AllRoutes; 