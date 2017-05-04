const Observable = require("FuseJS/Observable");

const name = Observable("Tricky Trails");
const location = Observable("Lakebed, Utah");
const distance = Observable(10.4);
const rating = Observable(4);
const comments = Observable("This hike was nice and hike-like. Glad I didn't bring a bike.");

export {
	name,
	location,
	distance,
	rating,
	comments
};
