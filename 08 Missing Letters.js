
/**********************************
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
String.charCodeAt()
String.fromCharCode()
**********************************/
function fearNotLetter(str) {
  
  //Set up a holder array to hold charCodes
  var holderArray = [];
  
  //Find the charCode of each of the elements
  for(var i = 0; i < str.length; i++) {
    //Push each value into holderArray
    holderArray.push(str.charCodeAt(i));
   }//end for loop
  
  //Iterate (?) through the charCodes
  //Each charCode (starting at index 1) should be 1 greater than the previous
      for(var j = 1; j < holderArray.length; j++) {
        //If encounter a gap, return the missing charCode
        if(holderArray[j] != holderArray[j-1] + 1) {
          return String.fromCharCode(holderArray[j] - 1);
        }//end if
      }//end for

}//end fearNotLetter

fearNotLetter("abcdefghjklmno");
