function check(str, bracketsConfig) {
    let brackets = "[]{}()<>";
    let stack = [];

    for (let bracket of input) {
        let bracketsIndex = brackets.indexOf(bracket);

  	// record order on the stack
    // check this record to make sure the brackets are all balanced
    }
    return true ? true : false;

}

const config1 = [['(', ')']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];

console.log(`Получили: ${check('()', config1)}, а должно быть: true`);
console.log(`Получили: ${check('())(', config1)}, а должно быть: false`);
console.log(`Получили: ${check('([{}])', config3)}, а должно быть: true`);
console.log(`Получили: ${check('[]][[]', config3)}, а должно быть: false`);  