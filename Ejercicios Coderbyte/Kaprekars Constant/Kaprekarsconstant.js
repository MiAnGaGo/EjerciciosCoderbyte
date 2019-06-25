function KaprekarsConstant(num) { 

    let count = 0;
    while (num != 6174) {
        let numArray = num.toString().split('').sort();
        
        
        let ascending = parseInt(numArray.join(''));
        let descending = parseInt(numArray.reverse().join(''));
        
        while (descending.toString().length < 4) {
            descending *= 10;
        }
        
        num = Math.abs(ascending - descending);

        count++;
        if (count > 999) break;  // failover
    }

    return count;
}
   
console.log(KaprekarsConstant(2111));