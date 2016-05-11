/******************************************
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
    RegExp
    HTML Entities
    String.replace()
*****************************************/

function convertHTML(str) {
  var newStr = "";
  var re = /[&<>"']/;
  str = str.split("");
  for(var i = 0; i < str.length; i++) {
    switch(str[i]){
      case '&':
        str[i] = "&amp;";
        break;
      case '<':
        str[i] = "&lt;";
        break;
      case '>':
        str[i] = "&gt;";
        break;
      case '"':
        str[i] = "&quot;";
        break;
      case "'":
        str[i] = "&apos;";
        break;
      default:
        break;
    }//end switch
    newStr += str[i];
  }//end for
  return newStr;
}

convertHTML("Dolce & Gabbana");
