//https://shrouded-plateau-62014.herokuapp.com/
//https://git.heroku.com/shrouded-plateau-62014.git

const express = require("express"); //import express
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/authRoutes");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport"); //No exports present

mongoose.connect(keys.mongoURI); //connect to mongoDB Client

const app = express(); //Express app created

app.use(bodyParser.json());
app.use(
	//Tell Express app to use cookieSession and configure it here
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey] //encrypt keys
	})
);

app.use(passport.initialize()); //app to use and Initialize passport
app.use(passport.session()); //app to use and initialize session

authRoutes(app); // arrow function attached with module.exports in authRoutes.js is called using @app parameter
require("./routes/billingRoutes")(app); //same as line# 9 + line#29

/**
 * Only in production for running client
 */
if (process.env.NODE_ENV === "production") {
	//Makaing sure that Express will serve up production assets main.js / main.css
	app.use(express.static("client/build"));

	//Express will server index.html if it will not recognize a URL/route
	const path = require("path");
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
