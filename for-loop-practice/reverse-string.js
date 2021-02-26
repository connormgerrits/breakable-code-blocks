/* ***This is a week 5 or 6 level exercise***

This is a function that reverses a string of words 
without using the .reverse() function. So running this 
javascript file using the command "node reverse-string.js"
in the terminal below should print out "olleh" to the console.
*/

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.log(reverseString('hello'));