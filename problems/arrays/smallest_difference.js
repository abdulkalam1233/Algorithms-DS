function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
	arrayOne.sort((a,b) => a-b);
	arrayTwo.sort((a,b) => a-b);
	
	let idx1 = 0;
	let idx2 = 0;
	let pair = [];
	let smallest = Infinity;
	let current = Infinity;
	
	while(idx1 < arrayOne.length && idx2 < arrayTwo.length) {
		let firstNum = arrayOne[idx1];
		let secondNum =  arrayTwo[idx2];
		
		if(firstNum < secondNum){
			current = secondNum - firstNum;
			idx1 += 1;
		} else if(firstNum > secondNum){
			current = firstNum - secondNum;
			idx2 += 1;
		} else {
			return [firstNum, secondNum];
		}
		
		if(current < smallest) {
			smallest = current;
			pair = [firstNum, secondNum];
		}
	}
	
	return pair;
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
