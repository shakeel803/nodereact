const mongoose = require("mongoose");
//const Schema = mongoose.Schema;
const {Schema} = mongoose; //same as line#2

const userSchema = new Schema({
	googleId: String,
	credits: {
		type: Number,
		default: 0
	}
});

mongoose.model("users", userSchema);
