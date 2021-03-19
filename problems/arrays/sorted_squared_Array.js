function sortedSquaredArray(array) {
  // Write your code here.
	let squaredArray = new Array(array.length).fill(0);
	let smallIdx = 0;
	let largeIdx = array.length - 1;
	
	let idx = largeIdx;
	while(smallIdx <= largeIdx){
		let smallValue = array[smallIdx];
		let largeValue = array[largeIdx];
		
		if(Math.abs(smallValue) > Math.abs(largeValue)){
			squaredArray[idx] = smallValue * smallValue;
			smallIdx += 1;
		} else{
			squaredArray[idx] = largeValue * largeValue;
			largeIdx -= 1;
		}
		idx -=1;
	}
	return squaredArray;
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
