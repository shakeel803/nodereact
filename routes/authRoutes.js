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

	app.get("/api/logout", (req, res) => {
		req.logout(); //passport attaches logout with req to kill cookie
		res.send(req.user);
	});

	app.get("/api/current_user", (req, res) => {
		res.send(req.user);
	});
};
