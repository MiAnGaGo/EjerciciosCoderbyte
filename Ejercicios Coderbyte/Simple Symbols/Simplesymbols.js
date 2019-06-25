function SimpleSymbols(str) { 

    let answer = 'true';
    let string = '=' + str + '=';
    for (let i = 1; i < string.length - 1; i++) {
        if (string[i].match(/[a-z]/i) !== null && (string[i-1] !== '+' || string[i+1] !== '+')) {
            answer = 'false';
        }
    }
    return answer; 
           
  }
     
  console.log(SimpleSymbols("+d+=3=+s+"));