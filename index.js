//1) Исправить ошибку в функции stringToJaden()

/**
 * Convert Jaden Casing String.
 * @param {string} str 
 * @param {string} sep - Separator.
 * @returns {string} - Returns a string in the format Jaden Casing.
 */
function toJadenCase(str, sep = ' ') {
  return str
    .split(sep)
    .filter(e => e.length > 0)
    .map(e => e[0].toUpperCase() + e.substring(1).toLowerCase())
    .join(sep);
}
//testing:
console.log(toJadenCase('I learn   jAVA script!'));//I Learn Java Script!

//2) Написать функцию, которая принимает строку и возвращает
//кол-во гласных(латиница)[a,o,u,i,e]. Учитывать и верхний регистр.

/**
 * Checks for a vowel.
 * @param {string} letter - Single letter.
 * @returns {boolean} - Returns true if the letter is a vowel.
 */
function isVowe(letter) {
  return ['a', 'e', 'i', 'o', 'u'].includes(letter.toLowerCase());
}
/**
 * Counts the number of vowels.
 * @param {string} str 
 * @returns {number} Number of vowels in a str
 */
function countVowe(str) {
  return [...str].filter(e => isVowe(e)).length;
}
//testing:
console.log(countVowe('I learn JavaScript!'));//6

//3) Написать функцию нахождения степени числа, в том числе
//для отрицательной степени. Использовать рекурсию.

/**
 * Returns the value of a base expression taken to a specified power.
 * @param {number} base - The base value of the expression.
 * @param {number} exponent - The exponent value of the expression.
 * @returns {number}
 */
function pow(base, exponent) {
  if (exponent > 0) {
    return exponent === 1 ? base : base * pow(base, --exponent);
  }
  if (exponent < 0) {
    return 1 / pow(base, Math.abs(exponent));
  }
  return 1;
}
//testing:
console.log(Math.pow(3, 3) === pow(3, 3));   // true
console.log(Math.pow(-3, 2) === pow(-3, 2)); // true
console.log(Math.pow(3, -4) === pow(3, -4)); // true
console.log(Math.pow(3, 0) === pow(3, 0));   // true

//4) Написать функцию, которая принимает число и возвращает вложенные пары круглых скобок,
//равные этому числу. Использовать рекурсию. Например,  pairBrackets(3),
//должна вывести:  ((())). Если число меньше 1 - выводим одну пару скобок.

//v1 Г@внокод with recursion(нельзя задать другие скобки без костылей)
/**
 * Takes a number and returns nested pairs of parentheses equal to that number
 * @param {number} size - Size of nested pairs of brackets.
 * @returns {string}
 */
function pairBrackets(size, begin = '', end = '') {
  begin += '(';
  end += ')';
  return size <= 1 ? begin + end : pairBrackets(--size, begin, end);
}
//v2 Best practice without recursion(можно задать другие скобки)
/**
 * Takes a number and returns nested pairs of parentheses equal to that number
 * @param {number} size - Size of nested pairs of brackets.
 * @param {string} begin - Open bracket.
 * @param {string} end - Closing bracket.
 * @returns {string}
 */
function pairBrackets2(size, begin = '(', end = ')') {
  return size <= 1 ? begin + end : begin.repeat(size) + end.repeat(size);
}
//testing:
console.log(pairBrackets(4));//(((())))
console.log(pairBrackets2(4, '[', ']'));//[[[[]]]]


//5) Дан массив чисел. используя Math и спред оператор
//найдите минимальный и максимальный элементы массива.

const arr = [1, 2, 3];
console.log(Math.min(...arr));//1
console.log(Math.max(...arr));//3

//6) Напишите функцию-стрелку, которая принимает неограниченное
//количество аргументов и возвращает их произведение.

/**
 * Multiplies numbers.
 * @param  {...number} args - Numbers to multiply.
 * @returns {number} - Returns 0 if args length is zero.
 */
const multipl = (...args) => {
  if (args.length === 0) return 0;
  return args.reduce((prev, curr) => prev * curr);
}
//testing:
console.log(multipl(1, 2, 3));//6
console.log(multipl());//0
