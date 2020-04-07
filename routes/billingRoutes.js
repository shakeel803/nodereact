/**
 * Billing Routes are in this file
 */
const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin"); //middleware created to ensure loggedin users only

module.exports = (app) => {
	app.post("/api/stripe", requireLogin, async (req, res) => {
		const charge = await stripe.charges.create({
			amount: 500,
			currency: "usd",
			description: "$5 for 5 credits",
			source: req.body.id
		});

		req.user.credits += 5; // add 5 credits to this user
		const updatedUser = await req.user.save();

		res.send(updatedUser);
	});
};
