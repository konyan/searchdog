function randomNumber(min, max) {
	// min and max included
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export default randomNumber(1000000000, 9000000000);
