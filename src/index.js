module.exports = function check(str, brackets) {
  let bracketsString = '';

  brackets.forEach(item => {
      item.forEach(el => {
          bracketsString += el;
      });
  });

  let stack = [];

  for (let bracket of str) {
      let bracketsIndex = bracketsString.indexOf(bracket, 0);

      if (bracketsIndex === -1) {
          continue;
      }

      if (bracketsString.indexOf(bracket, 0) === bracketsString.lastIndexOf(bracket)) {

          if(bracketsIndex % 2 === 0) {
              stack.push(bracketsIndex + 1);
          } else {
              if(stack.pop() !== bracketsIndex) {
                  return false;
              }
          }

      } else {
          if (stack[stack.length - 1] === bracketsIndex) {
              stack.pop();
          } else {
              stack.push(bracketsIndex);
          }
      }
  }    
  return stack.length === 0;
}
