export default function randomNumber(min = 1000000000, max = 9000000000) {
	// min and max included
	return Math.floor(Math.random() * (max - min + 1) + min);
}
