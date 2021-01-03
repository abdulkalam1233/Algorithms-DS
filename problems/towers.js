function towersOfHanoi(n, start, end, aux) {
    if (n === 1) {
        console.log('final', start, end, aux)
        return;
    }
    console.log(start, end, aux)
    towersOfHanoi(n - 1, start, aux, end);
    console.log(start, end, aux)
    towersOfHanoi(n - 1, aux, end, start);
}

towersOfHanoi(3, 1, 3, 2);
