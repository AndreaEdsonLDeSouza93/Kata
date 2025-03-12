/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 1 Solution
var twoSum = function(nums, target) {
    
    if(nums.length === 2 && ((nums[0] + nums[1]) === target)){
        return [0, 1];
    }

    let temp = 0;
    let index_temp = 0;
    let isLookingForThePair = true;
    
    if(nums.length > 2){
        temp = nums[0];
    }

    while(isLookingForThePair){
        for(let i = 1; i < nums.length; i++){
            if((nums[i] + temp) === target){
                return [index_temp, i];
                }
            }

        index_temp++;

        if(index_temp < nums.length){
            temp = nums[index_temp];
        } else {
            return "Pairs not found";
        }
    }
};

// 2 Solution (Optimized)

/**
 * Function to find indices of two numbers in an array that add up to a target sum.
 * 
 * @param {number[]} nums - Array of integers to find the pair in
 * @param {number} target - Target sum to find
 * @return {number[] | string} - Indices of the two numbers that add up to the target or error message
 * 
 * Time Complexity:
 * The time complexity of this algorithm is O(n), where n is the length of the input array. 
 * This is because we make a single pass through the array, performing constant-time operations 
 * (like checking and setting values in a Map) for each element. The input validation adds 
 * a linear check at the start, which doesn't significantly affect the overall time complexity.
 */
var twoSum = function(nums, target) {
    
    // Check if nums is an array and target is a number
    if (!Array.isArray(nums) || typeof target !== 'number') {
        return "Invalid inputs.";
    }

    // Check if the array has at least two elements
    if (nums.length < 2) {
        return "Please insert an array with at least two values.";
    }

    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        // Check if the current element is a number
        if (typeof nums[i] !== 'number') {
            return "Invalid inputs";
        }

        // Calculate the complement
        let complement = target - nums[i];

        // Check if the complement is already in the map
        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        // Add the current element and its index to the map
        map.set(nums[i], i);
    }

    // If no pairs are found, return this message
    return "Pairs not found";
};
