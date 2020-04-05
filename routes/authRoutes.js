const passport = require("passport");

module.exports = (app) => {
	//google auth route / endpoint
	app.get(
		"/auth/google",
		passport.authenticate("google", {
			scope: ["profile", "email"]
		})
	);

	//Route handler for auth/google/callback
	app.get(
		"/auth/google/callback",
		passport.authenticate("google"),
		(req, res) => {
			//redirect to relevant path after passport authenticated user
			res.redirect("/surveys");
		}
	);

	app.get("/api/logout", (req, res) => {
		req.logout(); //passport attaches logout with req to kill cookie
		//console.log(req.user);
		res.redirect("/");
	});

	app.get("/api/current_user", (req, res) => {
		res.send(req.user);
	});
};
