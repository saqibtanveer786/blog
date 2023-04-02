const express = require('express');
const jwt = require('jsonwebtoken');

async function getUserDetails(req, res, next) {
  const token = req.headers.authtoken;
  if (!token) {
    return res.status(401).json('NOT ALLOWED');
  }
  user = await jwt.verify(token, '123456');
  if (!user) {
    return res.status(401).json('NOT ALLOWED');
  }
  req.user = user.user;
  next();
}

module.exports = getUserDetails;
