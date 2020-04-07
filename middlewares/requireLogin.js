/**
 * @param {*} next used to pass the request to next stage
 */
module.exports = (req, res, next) => {
	if (!req.user) {
		return res.status(401).send({error: "You must log in !"});
	}
	next(); //move on to next step
};
