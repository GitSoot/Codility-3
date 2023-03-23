# camelCase Method for Strings

This JavaScript method converts a string into camel case, where all words have their first letter capitalized without spaces.

## Solution

To create a camelCase method for strings in JavaScript, we can follow the following steps:

1. Convert the string to an array of words using the split method and splitting on spaces.
    
2. Map over each word in the array and capitalize the first letter using the toUpperCase and slice methods.

3. Join the array of words back into a single string without spaces using the join method.

Here's the `camelCase` method: 

`String.prototype.camelCase = function() {
  return this.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}`

## Usage

We can now use the `camelCase` method on any string:

`const string1 = 'hello world';
console.log(string1.camelCase()); // output: "HelloWorld"`

`const string2 = 'camel case';
console.log(string2.camelCase()); // output: "CamelCase"`
