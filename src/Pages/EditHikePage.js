import * as Context from '../Modules/Context';

const hike = this.Parameter;

const name = hike.map(x => x.name);
const location = hike.map(x => x.location);
const distance = hike.map(x => x.distance);
const rating = hike.map(x => x.rating);
const comments = hike.map(x => x.comments);

function cancel() {
	// Refresh hike value to reset dependent Observables' values
	hike.value = hike.value;
	router.goBack();
}

function save() {
	Context.updateHike(hike.value.id, name.value, location.value, distance.value, rating.value, comments.value);
	router.goBack();
}

export {
	name,
	location,
	distance,
	rating,
	comments,

	cancel,
	save
};
