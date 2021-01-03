function findMaxMinInLinear(array) {
    let min = array[0];
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
        if (array[i] < min) {
            min = array[i];
        }
    }
    return { min, max };
}

function findMaxMinInTournamentMethod(array, low, high) {
    if (low === high) {
        console.log('1st case')
        return { min: array[low], max: array[high] }
    }
    if (low + 1 === high) {
        return { min: Math.min(array[low], array[high]), max: Math.max(array[low], array[high]) }
    } else {
        const mid = Math.floor((high + low) / 2);
        let { min: min1, max: max1 } = findMaxMinInTournamentMethod(array, low, mid)
        let { min: min2, max: max2 } = findMaxMinInTournamentMethod(array, mid, high)
        return { min: Math.min(min1, min2), max: Math.max(max1, max2) }
    }
}

function findMaxMinInPairMethod(array) {
    let result = { min: array[0], max: array[0] };
    let i = 1;
    if (array.length % 2 === 0) {
        result = { min: Math.min(array[0], array[1]), max: Math.max(array[0], array[1]) }
        i = 2;
    }
    while (i < array.length - 1) {
        if (array[i] < array[i + 1]) {
            result = { min: Math.min(array[i], result.min), max: Math.max(array[i + 1], result.max) }
        } else {
            result = { min: Math.min(array[i + 1], result.min), max: Math.max(array[i], result.max) }
        }
        i += 1;
    }
    return result;
}

console.log('Maximum and minimum of an array using minimum number of comparisons')
let array = [1000, 11, 445, 1, 3030, 3000, 5000];
console.log('Linear search: ', findMaxMinInLinear(array));
console.log('Tournament method: ', findMaxMinInTournamentMethod(array, 0, (array.length) - 1));
console.log('Pairwise comparison:', findMaxMinInPairMethod(array));
