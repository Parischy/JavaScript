/*
Add up the Numbers from a Single Number
addUp(4) ➞ 10 // 1 + 2 + 3 + 4 = 10
*/
function addUp(num) {
	return ( num * ( num + 1 ) ) / 2;
}

/*
Matchstick Houses
matchHouses(1) ➞ 6
matchHouses(4) ➞ 21
matchHouses(87) ➞ 436
*/
function matchHouses(step) {
	if ( step > 0 ) {
		return ( 6 * step ) - ( step - 1 );
	} else {
		return step;
	}
}