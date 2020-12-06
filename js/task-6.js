let input;
const numbers = [];
let total = 0;
do {
    input = prompt('Введите число:');

    if (input === null) {
        break;
    }

    input = Number(input);
    const notANumber = Number.isNaN(input);

    if (notANumber) {
        alert('Было введено не число, попробуйте еще раз');
        continue;
    }
    numbers.push(input);
    console.log(numbers);

}    
    while (input !== null)
// for (let i = 0; i < numbers.length; i += 1) {
//     total += numbers[i];
// }
for (const number of numbers) {
    total += number;
}
        
 console.log(total);  