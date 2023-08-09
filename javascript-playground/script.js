// 1.  Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
function convertFirstLetterToUpperCase (str) {
    return str.split(" ").map(e=> e.replace(e[0], e[0].toUpperCase())).join(" ") 
}
console.log(convertFirstLetterToUpperCase("big spherical egg")); // Big Spherical Egg

// 2. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
function longestWord(str) {
    let words = str.split(" "), max = 0, longestWord;
    for (let index = 0; index < words.length; index++) {
        while(words[index].length > max) {
            longestWord = words[index];
            max = words[index].length;
        }
    }
    return(longestWord);
}
console.log(longestWord("big brown-yellow egg yolk ")); // brown-yellow

// 3. Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not.
function isPrime(num) {
    if(num <= 1) return false;
    if(num <=3) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;    
    }
    return true
}
console.log(isPrime(17)); //true 
console.log(isPrime(25)); // false
console.log(isPrime(50));  // false

// 4. Write a JavaScript function that accepts an argument and returns the type.
const argType = para => typeof para;
console.log(argType({name: "Lukman"})); // object

// 5. Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
const secondLowestHighest = array => {
    let sorted = array.sort((a,b)=>a-b);
    return  `${sorted[1]}, ${sorted[sorted.length-2]}`
}
console.log( secondLowestHighest([4,12,5,57,1,3])) // 3, 12