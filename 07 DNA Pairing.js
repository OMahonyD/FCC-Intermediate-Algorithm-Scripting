/************************************
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
    Array.push()
    String.split()
************************************/

function pairElement(str) {
  //Split str into an array of letters
  str = str.split("");
  
  //Iterate through str and perform various mutations on each value
  for(var i = 0; i < str.length; i++) {
    if(str[i] == "G") {
      str[i] = "GC";
    }else if(str[i] == "C") {
      str[i] = "CG";
    }else if(str[i] == "A") {
      str[i] = "AT";
    }else if(str[i] == "T") {
      str[i] = "TA";
    }//end if
  }//end for
  
  return str;
}

pairElement("ATCGA");
