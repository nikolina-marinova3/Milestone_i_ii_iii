
function fizzBuzz(num) {
     switch (true) {
        case typeof num !== 'number':
            console.log('Please enter a number');
            break;
        case ((num % 3 === 0) && (num % 5 === 0)):
            console.log('FizzBuzz');
            break;
        case (num % 3 === 0):
            console.log('Fizz');
            break;
        case (num % 5 === 0):
            console.log('Buzz');
            break;
        default:
            console.log(num, 'The number is not divisible to 3, 5 or 15');
    }
}

console.log(fizzBuzz(12));
console.log(fizzBuzz(55));
console.log(fizzBuzz(60));
console.log(fizzBuzz(14));