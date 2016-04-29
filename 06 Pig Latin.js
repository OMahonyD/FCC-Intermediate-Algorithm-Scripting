/******************************************************
Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, 
moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
    Array.indexOf()
    Array.push()
    Array.join()
    String.substr()
    String.split()
******************************************************/

/*************************
Basically want to find any word beginning with a vowel and add "way" to it
If it doesn't we are going to go until we hit a vowel, move the first letter (or chunk of letters) to the end and add "ay" to the end.
*************************/
function translatePigLatin(str) {
  //split up the word into an array of characters
  var lrs = str.split("");
  //RegEx to find a,e,i,o,u (assign to variable)
  var re = /[aeiou]/;
  
  //if statement to check if the first letter matches aeiou
  //re.test letters array at starting point
  if(re.test(lrs[0])){
    //if it does join it with the string "way"
    return lrs.join("") + "way";
  }//end if
  
    while(true) {
    //for cases not matching vowels
    //if regex doesn't contain a vowel at first char
    if(!re.test(lrs[0])) {
    //push it to the end and splice the first letter
      lrs.push(lrs.splice(0,1));
    }else {
      break;
    }//end  if else    
  }//end while
  //join array with "ay"
  str = lrs.join("") + "ay";

  return str;
}

translatePigLatin("consonant");
