function removeElement(numbers,value){
    numbers = numbers.filter(number=>number!=value)
    return numbers;
}

console.log(removeElement([3,2,2,3],3)) // [2,2]
console.log(removeElement([0,1,2,2,3,0,4,2],2)) // [0,1,3,0,4]


// Alternative 1:
/*
    let k = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== value) {
            numbers[k] = numbers[i];
            k++;
        }
    }
    return k;
*/