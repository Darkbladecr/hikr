const hikes = [{
		id: 0,
		name: "Tricky Trails",
		location: "Lakebed, Utah",
		distance: 10.4,
		rating: 4,
		comments: "This hike was nice and hike-like. Glad I didn't bring a bike."
	},
	{
		id: 1,
		name: "Mondo Mountains",
		location: "Black Hills, South Dakota",
		distance: 20.86,
		rating: 3,
		comments: "Not the best, but would probably do again. Note to self: don't forget the sandwiches next time."
	},
	{
		id: 2,
		name: "Pesky Peaks",
		location: "Bergenhagen, Norway",
		distance: 8.2,
		rating: 5,
		comments: "Short but SO sweet!!"
	},
	{
		id: 3,
		name: "Rad Rivers",
		location: "Moriyama, Japan",
		distance: 12.3,
		rating: 4,
		comments: "Took my time with this one. Great view!"
	},
	{
		id: 4,
		name: "Dangerous Dirt",
		location: "Cactus, Arizona",
		distance: 19.34,
		rating: 2,
		comments: "Too long, too hot. Also that snakebite wasn't very fun."
	}
];

function getHikes() {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(hikes), 0);
	});
}

function updateHike(id, name, location, distance, rating, comments) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const i = hikes.findIndex(h => h.id === id);
			hikes[i] = Object.assign(hikes[i], {
				name,
				location,
				distance,
				rating,
				comments
			});
			resolve();
		}, 0);
	});
}

export {
	getHikes,
	updateHike
};
