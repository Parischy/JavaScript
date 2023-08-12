//Seven Boom!
function sevenBoom(arr) {
	if (arr.toString().match("7")) {
    return "Boom!";
  }
  return "there is no 7 in the array";
}

//Tower of Hanoi
function towerHanoi(discs) {
	if (discs <= 0) {
    return 0;
  } else {
    return 2 * towerHanoi(discs - 1) + 1;
  }
}

