// Write a JavaScript program to find the most frequent item of an array
// Defining an array with sets of numbers as value
var arr = [1,1,2,3,4,4,5,7,8,8,8,3,3,3,3,3,3,3,36,6,6,68,90,0];

// Sorting array Ascending
arr.sort(function(a,b){return a-b});

console.log(arr);

let count = 1, max=0, el;

for(let x=1; x < arr.length; ++x){
    
 
    if(arr[x]===arr[x-1]){
        count++;
     
    }else{
        count=1;
    }

    if(count>max){
        max=count;
        el=arr[x];
    }
   

}

console.log("The most occured Element is "+el+". It has appeared "+max+" times");