function LetterCapitalize(str) { 

    wordarr = str.split(" ");
    
    for (var i = 0, n = wordarr.length; i < n; i++) {
     wordarr[i] = wordarr[i][0].toUpperCase() + wordarr[i].slice(1); 
    }
    str = wordarr.join(" ");
    
    return str; 
           
  }

  console.log(LetterCapitalize(("Hola que hace")));