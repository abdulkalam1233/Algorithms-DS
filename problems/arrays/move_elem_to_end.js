
// WITH SORT
function moveElementToEnd(array, toMove) {
  // Write your code here.
	array.sort((a,b) => a-b);
	let idx = array.length - 1;
	
	for(let i = 0; i < idx; i++){
		if(array[i] === toMove){
			if(array[i] != array[idx]){
				array[i] = array[idx];
				array[idx] = toMove;
			}
			idx -= 1;
		}
	}
	return array;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;


// WITHOUT SORT
function moveElementToEnd(array, toMove) {
  // Write your code here.
	let i = 0;
	let j = array.length - 1;
	
	while (i < j){
		while(i < j && array[j] == toMove) j--;
		if(array[i] === toMove) swap(i,j,array);
		i++;
	}
	
	return array;
}

function swap(i, j, array){
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;

