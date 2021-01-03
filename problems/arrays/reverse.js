function reverse(array) {
    let length = array.length - 1;
    
    for (let i = 0; i <= Math.round(length / 2); i++) {
        let temp = array[i];
        array[i] = array[length];
        array[length] = temp;
        length -= 1;
    }
}

let array = [1, 2, 3, 4, 5];

reverse(array);

console.log(array);
