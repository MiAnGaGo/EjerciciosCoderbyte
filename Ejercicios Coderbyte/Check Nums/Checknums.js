function CheckNums(num1,num2) { 

    if (num1 == num2) {
       return "-1"; 
    }
    else {
      return (num2 > num1); 
    }     
  }

  console.log(CheckNums(1,5));