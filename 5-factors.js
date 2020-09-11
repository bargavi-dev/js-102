function factor(num) {
    let factors = [];
    for (let x = num; x >= 0; x--) {
        if(num % x === 0) {
            factors.push(x);
        }
    }
    return factors;
}
console.log(factor(8))