const hike = this.Parameter;

const name = hike.map(x => x.name);
const location = hike.map(x => x.location);
const distance = hike.map(x => x.distance);
const rating = hike.map(x => x.rating);
const comments = hike.map(x => x.comments);

function goBack() {
	router.goBack();
}

export {
	name,
	location,
	distance,
	rating,
	comments,

	goBack
};
