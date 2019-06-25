function PentagonalNumber(num) { 
    let totalDots = 1;
    for (let i = 1; i <= num; i++) {
        totalDots += ((i-2)*5 + 5);
    }
    return totalDots;
}
   
console.log(PentagonalNumber(5));