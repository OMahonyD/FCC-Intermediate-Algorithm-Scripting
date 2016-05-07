/*************************************************************
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp
String.replace()
*************************************************************/

function spinalCase(str) {
  //need to put a hyphen where there is a space or before an uppercase letter
  var re=/[\_\s]/g;//[\_\s] matches tests 1, 3 and 4. Finds all whitespace and underscores
  //Need to find regex to find upprcase letter immediately after lowercase letter
  var newStr = str.replace(re, "-").toLowerCase();
  return newStr;
}
spinalCase('AllThe-small Things');
