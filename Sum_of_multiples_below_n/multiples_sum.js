function sumMultiples(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            console.log(i);
            sum += i;
        }
    }
    return sum;
}
