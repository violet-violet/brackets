function check(str, brackets) {
    console.log(`Входной массив со скобками для проверки: ${brackets}`);

    // let brackets = "[]{}()<>";

    // let brackets1 = [];

    console.log(brackets);

    // brackets.forEach(item => {
    // });

    let arr = brackets.reduce((acc, item) => {
        acc = acc.concat(item);
        console.log(acc);
    }, []);



    let stack = [];
    for (let bracket of str) {
        let bracketsIndex = brackets.indexOf(bracket, 0);
        console.log(brackets.indexOf(bracket));

        if (bracketsIndex === -1) {
            continue;
        }

  	    if(bracketsIndex % 2 === 0) {
            stack.push(bracketsIndex + 1);
        } else {
            if(stack.pop() !== bracketsIndex) {
                return false;
            }
        }
    }    
    return stack.length === 0
}

const config1 = [['(', ')']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];

// console.log(`Получили: ${check('()', config1)}, а должно быть: true`); 
// console.log(`Получили: ${check('())(', config1)}, а должно быть: false`);
// console.log(`Получили: ${check('([{}])', config3)}, а должно быть: true`);
// console.log(`Получили: ${check('[]][[]', config3)}, а должно быть: false`);  

check('()', config1);
check('())(', config1);
check('([{}])', config3);
check('[]][[]', config3);
