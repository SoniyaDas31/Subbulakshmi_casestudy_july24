// Write a JavaScript program to find the sum of squares of the elements of an array.

// Math.pow(7,2); Squares of 7

// defining values for sum and array
let sum = 0;
let arr=[1,2,3,4,5,6,7];


// for loop for array
for (let i= 0; i<(arr.length); i++) {
    // console.log(arr[i]);
    console.log(Math.pow(arr[i],2));
    sum += Math.pow(arr[i],2);
}

//printing value of the sum
console.log(sum);