import hikes from '../hikes';

function goToHike(arg) {
	const hike = arg.data;
	router.push("editHike", hike);
}

export {
	hikes,

	goToHike
};
