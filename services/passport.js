const passport = require("passport"); //import
const GoogleStrategy = require("passport-google-oauth20").Strategy; //import
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users"); //import User Model from mongoose

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

/**
 * Register/use and Tell Passport How to use GoogleStrategy in passport
 */
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback",
			proxy: true //donot change the url to http if it goes through proxy
		},
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({googleId: profile.id});
			if (existingUser) {
				//We already have this user signed up
				//done(@error, @user) to tell passport we are done with auth
				done(null, existingUser);
			} else {
				//This is new user save him to DB
				const newUser = await new User({googleId: profile.id}).save();
				done(null, newUser);
			}
		}
	)
);
