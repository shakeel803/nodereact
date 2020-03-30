const passport = require("passport"); //import
const GoogleStrategy = require("passport-google-oauth20").Strategy; //import
const keys = require("../config/keys");

/**
 * Register/use and Tell Passport How to use GoogleStrategy in passport
 */
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback"
		},
		(accessToken, refreshToken, profile, done) => {
			console.log(("access token", accessToken));
			console.log(("refresh token", refreshToken));
			console.log(("profile", profile));
		}
	)
);
