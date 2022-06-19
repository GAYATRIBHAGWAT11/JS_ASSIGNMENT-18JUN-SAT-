// Take two integers a,b and return the count of all the odd numbers in between them, inclusive of the input.

// let num1=parseInt(process.argv[2])
// let num2=parseInt(process.argv[3]);
let num1=2;
let num2=9;
let count=0;
for(i=num1; i<=num2; i++){
    if(i%2==0){
        count++
    }
    
}
console.log(count);