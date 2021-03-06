// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  if (cardNumber.length == 14 && (cardNumber.startsWith('38') || cardNumber.startsWith('39'))) {
  	return "Diner\'s Club";
  }
  
  if (cardNumber.length == 15 && (cardNumber.startsWith('34') || cardNumber.startsWith('37'))) {
  	return "American Express";
  }
  // Once you've read this, go ahead and try to implement this function, then return to the console.

};

detectNetwork('38345678901234');
detectNetwork('39345678901234');
detectNetwork('343456789012345');
detectNetwork('373456789012345');

