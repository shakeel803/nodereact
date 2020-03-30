const passport = require("passport");

module.exports = app => {
	//google auth route / endpoint
	app.get(
		"/auth/google",
		passport.authenticate("google", {
			scope: ["profile", "email"]
		})
	);

	//Route handler for auth/google/callback
	app.get("/auth/google/callback", passport.authenticate("google"));
};
