// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, check if the current number is odd or even, and display the message to the screen as odd or even.

//for loop to iterate from 0 to 15
for(let i=0; i<=15; i++){
    let number=i;
   // console.log(number);
    // Condition to check divisible by 2
    if(number%2===0){
        console.log(""+number+" is a Even number");
    }else{
        console.log(""+number+" is a Odd number");
    }
}