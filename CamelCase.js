String.prototype.camelCase = function() {
    return this.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
  }
  
  const string1 = 'hello world';
console.log(string1.camelCase()); 

const string2 = 'camel case';
console.log(string2.camelCase()); 
