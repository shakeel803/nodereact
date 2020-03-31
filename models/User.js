const mongoose = require("mongoose");
//const Schema = mongoose.Schema;
const {Schema} = mongoose; //same as line#2

const userSchema = new Schema({
	googleId: String,
	name: String
});

mongoose.model("users", userSchema);
