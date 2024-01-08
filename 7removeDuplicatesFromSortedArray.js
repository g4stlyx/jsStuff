function removeDuplicates(numbers){
    let uniqueNumbers = [];

    for(let i=0;i<numbers.length;i++){
        if(!uniqueNumbers.includes(numbers[i])){
            uniqueNumbers.push(numbers[i]);
        }
    }

    return uniqueNumbers.length;
}


console.log(removeDuplicates([1,1,2])) // 2
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])) // 5


// Alternative 1: with using one array only
/*
    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
*/


// Alternative 2: with using sets
/*
    const set = new Set(nums)
    nums.length = 0
    nums.push(...set)
    return nums.length
*/