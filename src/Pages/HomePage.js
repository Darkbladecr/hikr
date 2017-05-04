import { hikes } from '../Modules/Context';

function goToHike(arg) {
	const hike = arg.data;
	router.push("editHike", hike);
}

export {
	hikes,

	goToHike
};
