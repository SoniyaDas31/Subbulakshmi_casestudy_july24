// Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not. 
// Function to check prime numbers
function check_prime(n){
    var number = n;
    var prime = true;

    if(number<= 1){
        prime=false;
        console.log("The Number is niether prime nor composite");
        
    }else{

        // for loop used to Iterate from 2 to n-1 to check for factors of n
        for(let x=2; x < number; x++){
            
            if((number%x)==0){
                prime=false;
                break;
            }

        }
       
    }

    if(prime){
        // console.log(prime);
        console.log("The Number is prime");
    }else{
        // console.log(prime);
        console.log("The Number is not a prime");
    }
    
     return number;
    
   
}

var arraynumbers = [45,34,56,78];
console.log(check_prime(arraynumbers[0]));