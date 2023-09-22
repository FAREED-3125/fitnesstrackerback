//Express imports
const express = require("express");

//Model Imports
const User = require("../Models/User.js");

//Monngoose Import
const mongoose = require("mongoose");

//sign Up Controller

const UserSignup = async (request, response) => {
  
  try {
    const { username, email, password } = request.body;
    const user = await User.signup(username, email, password);
    if (user) {
      response.status(200).json({ email, username });
    }
  } catch (err) {
    console.log(err);
    response.status(404).send(err.message);
  }
};

//User Login
const UserLogin = async (request, response) => {

};

module.exports = {
  UserSignup,
  UserLogin,
};
