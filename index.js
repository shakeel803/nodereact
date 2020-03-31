//https://shrouded-plateau-62014.herokuapp.com/
//https://git.heroku.com/shrouded-plateau-62014.git

const express = require("express"); //import express
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");

const authRoutes = require("./routes/authRoutes");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport"); //No exports present

mongoose.connect(keys.mongoURI); //connect to mongoDB Client

const app = express(); //Express app created

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey] //encrypt keys
	})
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app); // arrow function attached with module.exports in authRoutes.js is called using @app parameter

const PORT = process.env.PORT || 5000;
app.listen(PORT);
