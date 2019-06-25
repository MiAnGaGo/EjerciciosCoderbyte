function AlphabetSoup(str) { 

    let letters = str.split('');
    return letters.sort().join('');
         
}
   
console.log(AlphabetSoup("zaykjas"));