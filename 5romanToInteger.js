function romanToInteger(roman){
    let result=0;
    let romanArray = roman.split("");
    const hashTable = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    for(let i=0;i<romanArray.length;i++){
        const current = hashTable[romanArray[i]];
        const next = hashTable[romanArray[i + 1]];

        if (current < next) {
            result += next - current;
            i++;
        }
        else {
            result += current;
        }
    }

    return result;
}

console.log(romanToInteger("III")) // 3
console.log(romanToInteger("IV")) // 4
console.log(romanToInteger("LVIII")) // 58
console.log(romanToInteger("MCMXCIV")) // 1994