function EightQueens(strArr) { 

    let newArr = [];
    for (let i = 0; i < strArr.length; i++) {
        let element = [strArr[i][1], strArr[i][3]];
        newArr.push(element);
    }
    for (let i = 0; i < newArr.length; i++) {
        let x1 = newArr[i][0];
        let y1 = newArr[i][1];
        for (let j = 0; j < newArr.length; j++) {
            if (i !== j) {
                let x2 = newArr[j][0];
                let y2 = newArr[j][1];
                if (x1 === x2 || y1 === y2 || x1 - x2 === y1 - y2 || x1 - x2 === y2 - y1) {
                    return strArr[i];
                }
            }
        }
    }
    return true;         
  }
  console.log(EightQueens(["(2,1)", "(4,3)", "(6,3)", "(8,4)", "(3,4)", "(1,6)", "(7,7)", "(5,8)"]));