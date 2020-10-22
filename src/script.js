function check(str, brackets) {
    let bracketsString = '';

    brackets.forEach(item => {
        item.forEach(el => {
            bracketsString += el;
        });
    });
    // console.log(bracketsString);

    let stack = [];

    for (let bracket of str) {
        // console.log(`Проверяемая скобка = ${bracket}`);

        let bracketsIndex = bracketsString.indexOf(bracket, 0);
        // console.log(`Индекс проверяемой скобки = ${bracketsIndex}`);

        if (bracketsIndex === -1) {
            continue;
        }

        if (bracketsString.indexOf(bracket, 0) === bracketsString.lastIndexOf(bracket)) {
            // console.log("----СВЕРХУ ОБЫЧНАЯ СКОБКА----");
            // console.log(`Обычная потому что: ind с начала равен ${bracketsString.indexOf(bracket, 0)}`);
            // console.log(`Обычная потому что: ind с конца равен ${bracketsString.lastIndexOf(bracket)}`);


            if(bracketsIndex % 2 === 0) {
                stack.push(bracketsIndex + 1);
            } else {
                if(stack.pop() !== bracketsIndex) {
                    return false;
                }
            }

        } else {
            // console.log("----СВЕРХУ ОДИНАКОВАЯ СКОБКА----");
            // console.log(`Обычная потому что: ind с начала равен ${bracketsString.indexOf(bracket, 0)}`);
            // console.log(`Обычная потому что: ind с конца равен ${bracketsString.lastIndexOf(bracket)}`);

            if (stack[stack.length - 1] === bracketsIndex) {
                stack.pop();
            } else {
                stack.push(bracketsIndex);
            }
        }
    }    
    return stack.length === 0
}

const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

console.log(`Получили: ${check('||', config4)}, а должно быть: true`); 
console.log(`Получили: ${check('|()|', config5)}, а должно быть: true`);
console.log(`Получили: ${check('|()|(||)||', config5)}, а должно быть: true`);
console.log(`Получили: ${check('111115611111111222288888822225577877778775555666677777777776622222', config6)}, а должно быть: true`);  
console.log(`Получили: ${check('111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222', config6)}, а должно быть: true`);  
console.log(`Получили: ${check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])(())', config7)}, а должно быть: true`);  
console.log(`Получили: ${check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])((([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])))', config7)}, а должно быть: true`);  


// 8
// (check('||', config4), true)

// 9
// (check('|()|', config5), true)
// 11
// (check('|()|(||)||', config5), true)
// 12
// assert.equal(check('111115611111111222288888822225577877778775555666677777777776622222', config6), true);

// 15
// assert.equal(check('111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222', config6), true);

// 19
// assert.equal(check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])(())', config7), true);

// 20
// assert.equal(check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])((([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])))', config7), true);
