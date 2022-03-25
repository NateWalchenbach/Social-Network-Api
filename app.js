const express = require('express');

const app = express();

// 1) Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString;
  next();
});

// 2) PUT ROUTES HERE

module.exports = app;
