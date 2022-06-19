let n=432;
let sum=0;
while(n>0){
    rem=Math.floor(n%10);
    sum=sum*10+rem;
    n=Math.floor(n/10);  
}
console.log(sum)
