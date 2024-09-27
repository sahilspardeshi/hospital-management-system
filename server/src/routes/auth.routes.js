const { login } = require("../controller/auth.controller");
const express = require('express');
const AuthRoutes = express.Router();
AuthRoutes.get('/login',login);
module.exports = AuthRoutes;