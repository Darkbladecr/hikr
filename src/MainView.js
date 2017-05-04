import hikes from './hikes';
const Observable = require("FuseJS/Observable");

const hike = Observable();

const name = hike.map(x => x.name);
const location = hike.map(x => x.location);
const distance = hike.map(x => x.distance);
const rating = hike.map(x => x.rating);
const comments = hike.map(x => x.comments);

function chooseHike(arg) {
	hike.value = arg.data;
}

export {
	hikes,
	name,
	location,
	distance,
	rating,
	comments,
	chooseHike
};
