/**************************
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    Roman Numerals

    Array.splice()

    Array.indexOf()

    Array.join()
  ***************************/
  
  function convertToRoman(num) {
 //Create an array of decimals
  var decimal = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10,
                 9, 8, 7, 6, 5, 4, 3, 2, 1];
  //Create an array of roman numerals
  var roman = ["M", "CM", "DCCC", "DCC", "DC", "D", "CD", "CCC", "CC", "C", "XC", "LXXX", "LXX", "LX",
               "L", "XL", "XXX", "XX", "X", "IX", "VIII", "VII", "VI", "V", "IV", "III", "II", "I"];
  //Create a holding variable
  var romanValue = '';
  
  //Iterate through the decimal array
  for(var i = 0; i < decimal.length; i++) {
    //while the num variable is greater than or equal to the current index of decimal
    while(num >= decimal[i]) {
      //Add its equivalent roman numeral to original empty string.
      romanValue = romanValue + roman[i];
      //Make num equal to num less the value at the current index
      num = num - decimal[i];
    }//end while
  }//end for
  return romanValue;
  
  
  
}//end convertToRoman

convertToRoman(2163);
