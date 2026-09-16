// ============================================================
// JAVASCRIPT FUNCTIONS - ALL IN ONE
// ============================================================

// ============================================================
// 1. STRING MANIPULATION FUNCTIONS
// ============================================================

// --- Reverse a String ---
function reverseString(str) {
    if (typeof str !== 'string') return '';
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// --- Count Characters ---
function countCharacters(str) {
    if (typeof str !== 'string') return 0;
    return str.length;
}

// --- Capitalize Words ---
function capitalizeWords(sentence) {
    if (typeof sentence !== 'string') return '';
    return sentence
        .split(' ')
        .map(word => {
            if (word.length === 0) return word;
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(' ');
}

// ============================================================
// 2. ARRAY FUNCTIONS
// ============================================================

// --- Find Maximum ---
function findMaximum(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}

// --- Find Minimum ---
function findMinimum(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    return min;
}

// --- Sum of Array ---
function sumArray(arr) {
    if (!Array.isArray(arr)) return 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// --- Filter Array ---
function filterArray(arr, condition) {
    if (!Array.isArray(arr) || typeof condition !== 'function') return [];
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (condition(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

// ============================================================
// 3. MATHEMATICAL FUNCTIONS
// ============================================================

// --- Factorial ---
function factorial(n) {
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) return null;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// --- Prime Number Check ---
function isPrime(num) {
    if (typeof num !== 'number' || !Number.isInteger(num)) return false;
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

// --- Fibonacci Sequence ---
function fibonacciSequence(terms) {
    if (typeof terms !== 'number' || terms <= 0) return [];
    const sequence = [];
    if (terms >= 1) sequence.push(0);
    if (terms >= 2) sequence.push(1);
    for (let i = 2; i < terms; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// ============================================================
// 4. TESTING ALL FUNCTIONS
// ============================================================

console.log("========================================");
console.log("       STRING MANIPULATION FUNCTIONS");
console.log("========================================");
console.log("Reverse 'hello world':", reverseString("hello world"));
console.log("Reverse 'JavaScript':", reverseString("JavaScript"));
console.log("Count 'JavaScript':", countCharacters("JavaScript"));
console.log("Count 'Hello World!':", countCharacters("Hello World!"));
console.log("Capitalize 'the quick brown fox':", capitalizeWords("the quick brown fox"));
console.log("Capitalize 'hello world from js':", capitalizeWords("hello world from js"));

console.log("\n========================================");
console.log("            ARRAY FUNCTIONS");
console.log("========================================");
const numbers = [3, 1, 7, 2, 9, 4, 8];
console.log("Array:", numbers);
console.log("Maximum:", findMaximum(numbers));
console.log("Minimum:", findMinimum(numbers));
console.log("Sum:", sumArray(numbers));
console.log("Evens only:", filterArray(numbers, n => n % 2 === 0));
console.log("Odd numbers:", filterArray(numbers, n => n % 2 !== 0));
console.log("Greater than 5:", filterArray(numbers, n => n > 5));
console.log("Less than 4:", filterArray(numbers, n => n < 4));

console.log("\n========================================");
console.log("         MATHEMATICAL FUNCTIONS");
console.log("========================================");
console.log("Factorial of 5:", factorial(5));
console.log("Factorial of 0:", factorial(0));
console.log("Factorial of 10:", factorial(10));
console.log("Factorial of -3 (invalid):", factorial(-3));
console.log("Is 17 prime?", isPrime(17));
console.log("Is 18 prime?", isPrime(18));
console.log("Is 2 prime?", isPrime(2));
console.log("Is 1 prime?", isPrime(1));
console.log("Is 97 prime?", isPrime(97));
console.log("Fibonacci (8 terms):", fibonacciSequence(8));
console.log("Fibonacci (1 term):", fibonacciSequence(1));
console.log("Fibonacci (10 terms):", fibonacciSequence(10));

console.log("\n========================================");
console.log("              ALL DONE!");
console.log("========================================");
