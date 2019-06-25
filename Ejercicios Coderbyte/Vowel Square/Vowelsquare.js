function VowelSquare(strArr) { 

    for (let row = 0; row < strArr.length-1; row++) {
        for (let col = 0; col < strArr[0].length-1; col++) {
            if (isVowels2x2(strArr, row, col)) {
                return row + '-' + col;
            }
        }
    }
    return 'not found';
         
         
    function isVowels2x2(strArr, row, col) {
        if (!isVowel(strArr[row][col])) return false;
        if (!isVowel(strArr[row+1][col])) return false;
        if (!isVowel(strArr[row][col+1])) return false;
        if (!isVowel(strArr[row+1][col+1])) return false;
        return true;
    }
    
    function isVowel(letter) {
        const VOWELS = 'aeiou';
        return VOWELS.includes(letter);
    }
}
   
console.log(VowelSquare(["aqrst", "ukaei", "ffooo"]));