// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
//  No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.


// we are going to want to sort the array in asending order, we will use .sort() for that
// we will then want to assign the first two elements in the array into 'a , b' since they will be the smallest
// we will then want to add them together in the return
function sumTwoSmallestNumbers(numbers){
    let [a, b] = numbers.sort((a, b) => a - b)
    return a + b;
}