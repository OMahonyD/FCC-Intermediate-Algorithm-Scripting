
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
    
      //Each charCode (starting at index 1?) should be 1 greater than the previous
      //If encounter a gap, return the missing charCode

      //Turn the charCode into its respective letter
      //Return the missing letter
      //if there is nothing missing return undefined
      

  return holderArray;
}

fearNotLetter("abcdefghjklmno");
