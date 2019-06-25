function ClosestEnemyII(strArr) { 

    let newArr = [];
    let x = 0;
    let y = 0;
    
    for (let i = 0; i < strArr.length; i++) {
        for (let j = 0; j < strArr[i].length; j++) {
            if (strArr[i][j] === '1') {
                x = i;
                y = j;
            } else if (strArr[i][j] === '2') {
                newArr.push([i, j]);
            }
        }
    }
    
    if (newArr.length > 0) {
        let d = strArr.length;
        let c = strArr.length;
        for (let i = 0; i < newArr.length; i++) {
            let dx = Math.min(Math.abs(newArr[i][0] - x), Math.abs(x - newArr[i][0] + d));
            let dy = Math.min(Math.abs(newArr[i][1] - y), Math.abs(y - newArr[i][1] + d));
            c = Math.min(c, dx + dy);
        }
        return c;
    } else {
        return '0';
    }
          
 }
    
 console.log(ClosestEnemyII(["0000", "2010", "0000", "2002"]));