const Observable = require("FuseJS/Observable");
import * as Backend from './Backend';

const hikes = Observable();

Backend.getHikes()
	.then(newHikes => hikes.replaceAll(newHikes))
	.catch(error => console.log("Couldn't get hikes: " + error));

function updateHike(id, name, location, distance, rating, comments) {
	const i = hikes.toArray().findIndex(h => h.id === id);
	let hike = hikes.getAt(i);
	hike = Object.assign(hike, {
		name,
		location,
		distance,
		rating,
		comments
	});
	hikes.replaceAt(i, hike);
	Backend.updateHike(id, name, location, distance, rating, comments)
		.catch(error => console.log("Couldn't update hike: " + id));
}

export {
	hikes,

	updateHike
};
