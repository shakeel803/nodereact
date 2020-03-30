//https://shrouded-plateau-62014.herokuapp.com/
//https://git.heroku.com/shrouded-plateau-62014.git

const express = require("express"); //import express
require("./services/passport"); //No exports present
const authRoutes = require("./routes/authRoutes");

const app = express(); //Express app created

authRoutes(app); // arrow function attatached with module.exports in authRoutes.js is called

const PORT = process.env.PORT || 5000;
app.listen(PORT);
