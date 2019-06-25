function LongestWord(sen) {
    let validCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let maxLength = 0;
    let longestWord = '';
    for (let i = 0, length = 0, word = ''; i < sen.length; i++) {
        let c = sen[i];
        if (validCharacters.includes(c)) {
            length++;
            word += c;
        } else {
            length = 0;
            word = '';
        }
        if (length > maxLength) {
            maxLength = length;
            longestWord = word;
        }
    }
  return longestWord;
}
console.log(LongestWord(("hola quetalcomo teññas")));