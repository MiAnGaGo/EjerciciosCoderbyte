function MaximalSquare(strArr) { 
    let test, row, col, r, c;
    let maxArea = 0;
    const NUM_ROWS = strArr.length;
    const NUM_COLS = strArr[0].length;
    for (row = 0; row < NUM_ROWS; row++) {
        for (col = 0; col < NUM_COLS; col++) {
            if (strArr[row][col] != 1) {
                continue;
            }
            else {
                let thisArea = testMaxSquare(row, col);
                if (thisArea > maxArea) {
                    maxArea = thisArea;
                }
            }
        }
    }
    function testMaxSquare(row, col) {
        let broken = false;
        let size = 0;
        while (!broken) {
            size++;
            for (x = 0; x <= size; x++) {
                for (y = 0; y <= size; y++) {
                    if ((row + x >= NUM_ROWS) || (col + y >= NUM_COLS) || strArr[row + x][col + y] != 1) {
                        broken = true;
                    }

                }
            }
            if (size > 10) {
                break;
            }
        }
        return size * size;
    }
    return maxArea; 
}
console.log(MaximalSquare(["0111", "1111", "1111", "1111"]));