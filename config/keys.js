//keys.js
if (process.env.NODE_ENV === "production") {
	//We are in dev envmt use env variables
	module.exports = require("./prod");
} else {
	//We are in dev env, use dev.js file
	module.exports = require("./dev"); //require dev.js and export it to be used elsewhere
}
