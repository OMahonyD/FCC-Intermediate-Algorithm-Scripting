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

function translatePigLatin(str) {
  var vowel = ['a', 'e', 'i', 'o', 'u'];
  var way = "way";
  var ay = "ay";
  
  //Iterate through the vowel array
  for(var i in vowel) {
    //if the current index of the vowel array equals the first character of str
    if(vowel[i] == str.charAt(0)) {
      //return str plus "way"
      return str + way;
    }//end if
  }//end for
}//end translatePigLatin

translatePigLatin("consonant");
