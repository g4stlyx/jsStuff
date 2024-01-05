// class Solution {
//     public int[] twoSum(int[] nums, int target) {
//         int[] arr = new int[2];;
//         for(int i=0;i<nums.length;i++){
//             int temp = nums[i];
//             for(int j=0;j<nums.length;j++){
//                 if(i != j && temp + nums[j] == target){
//                     arr[0] = i;
//                     arr[1] = j;
//                     return arr;
//                 }
//             }
//         }
//         return arr;
//     }
// }

function twoSum(numbers, target){
    for(i=0;i<numbers.length;i++){
        for(j=0;j<numbers.length;j++){
            if(i != j && numbers[i] + numbers[j] == target){
                return [i,j];
            }
        }
    }   
}

console.log(twoSum([2,7,11,15],9))
console.log(twoSum([3,2,4],6))
console.log(twoSum([3,3],6))

