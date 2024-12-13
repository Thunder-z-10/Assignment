function calculateDifference(num1, num2) {
    return num1 - num2;
}

function isOdd(num) {
    return num % 2 !== 0;
}

function findMin(numbers) {
    return Math.min(...numbers);
}

function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

function sortArrayDescending(numbers) {
    return numbers.slice().sort((a, b) => b - a);
}

function lowercaseFirstLetter(str) {
    if (!str) return "";
    return str.charAt(0).toLowerCase() + str.slice(1);
}

function findAverage(numbers) {
    if (numbers.length === 0) return 0;
    return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(calculateDifference(10, 5));
console.log(isOdd(3));
console.log(findMin([3, 1, 4, 2]));
console.log(filterEvenNumbers([3, 1, 4, 2]));
console.log(sortArrayDescending([3, 1, 4, 2]));
console.log(lowercaseFirstLetter("Hello"));
console.log(findAverage([3, 1, 4, 2]));
console.log(isLeapYear(2024));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));
