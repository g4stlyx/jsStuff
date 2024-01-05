function isPalindrome(number){
    numberString = number.toString();
    return numberString === numberString.split('').reverse().join('')
}

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))
console.log(isPalindrome(1000021))