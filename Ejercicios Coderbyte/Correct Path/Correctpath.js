function CorrectPath(str) { 

    const letters = ['u', 'd', 'l', 'r'];
    let questionMarks = [];
    str.split('').forEach((value, index) => {
        if (value === '?') {
            questionMarks.push(index);
        }
    });
    let count = questionMarks.length;
    let total = Math.pow(4, count);
    for (let i = 0; i < total; i++) {
        let path = '';
        let id = i.toString(4).padStart(count, '0');
        let index = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[j] === '?') {
                path += letters[parseInt(id[index])];
                index++;
            } else {
                path += str[j];
            }
        }
        if (testPath(path)) {
            return path;
        }
    }
    return 'not found';
           
  }
         
  function testPath (path) {
      let testArray = [];
      for (let i = 0; i < 5; i++) {
          testArray.push([0, 0, 0, 0, 0]);
      }
      let location = [0, 0];
      for (let i = 0; i < path.length; i++) {
          testArray[location[0]][location[1]] = 1;
          let newLocation = [location[0], location[1]];
          switch (path[i]) {
              case 'u':
                  newLocation[0]--;
                  break;
              case 'd':
                  newLocation[0]++;
                  break;
              case 'l':
                  newLocation[1]--;
                  break;
              case 'r':
                  newLocation[1]++;
                  break;
          }
          if (newLocation[0] === 4 && newLocation[1] === 4 && i === path.length - 1) {
              return true;
          } else if (newLocation[0] < 0 || newLocation[0] > 4 || newLocation[1] < 0 || newLocation[1] > 4) {
              return false;
          } else if (testArray[newLocation[0]][newLocation[1]] === 1) {
              return false;
          }
          location = newLocation;
      }
      return false;
  }
  
  console.log(CorrectPath("drdr??rrddd?"));                        