'use strict';
const path = require('path');
const fs = require('fs');
const http = require('http');
const os = require('os');
const _ = require('lodash');
const express = require('express');

// Constants
const PORT = process.env.PORT || 8585;
const HOST = '0.0.0.0';

const logo = '\
';

console.log('hello world');

const publicPath = path.join(__dirname, "../public");

console.log(publicPath);

// App
const app = express();
app.use(express.static(publicPath));

// app.get('/', (req, res) => {
//   console.log("get /");
//   res.send(`Hello server world\n\n`);
// });

let user = os.userInfo();
console.log(user);

// console.log('this should happen down there...');

app.listen(PORT, HOST, () => {
  console.log(`App is listening on port ${PORT}...`);
});
