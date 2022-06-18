let n=parseInt(process.argv[2])
let r, temp;
let sum=0;
temp=n;
while(n>0)    
{    
r=Math.floor(n%10);    
sum=sum+(r*r*r);    
n=n/10;    
}    
if(temp==sum)    
console.log("armstrong  number ");    
else    
console.log("not armstrong number");    
