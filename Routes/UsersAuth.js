//express imports 
const express = require('express');
const { UserSignup, UserLogin } = require('../controllers/UserController');

//Router imports 
const Router = express.Router()

//COntroller imports 

//login Route
Router.post('/login',UserLogin);


//Signup Route
Router.post('/signup',UserSignup);

module.exports = Router;
