/// during the loop we'll check if the letter exist
/// if it does add 1 to the letter
/// if not create a key with a value of 1


function countLetters(string) {

/// create a var to store string to have no spaces and to lower case it
  var properString = string.split(" ").join("")
  var properString = properString.toLowerCase();
  console.log(properString);
/// create empty object to show tally of letters
  var tally = {};
/// want to create a for loop for each letter of the string
for(var i = 0; i < properString.length; i++) {
  console.log(properString[i]);
}



}

///// tester

console.log(countLetters("Hello friend my name is SUPERMAN"));

