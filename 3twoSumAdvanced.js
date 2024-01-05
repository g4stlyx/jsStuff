function twoSumAdvanced(numbers, target){
    const numbersMap = new Map();
    for(let i=0;i<numbers.length;i++){
        const difference = target - numbers[i];

        if(numbersMap.has(difference)){
            return [numbersMap.get(difference),i];
        }

        numbersMap.set(numbers[i],i); // creating numbersMap with the given array
    }
}

console.log(twoSumAdvanced([2,7,11,15],9))
console.log(twoSumAdvanced([3,2,4],6))
console.log(twoSumAdvanced([3,3],6))

