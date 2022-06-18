let num=parseInt(process.argv[2])
let orig, rem;
  let rev=1;
  orig=num;
  rem=num%10;
  quo = Math.floor(num/10);
  rev = (rem*10)+quo;
  if(orig==rev){
    console.log("yes");
  }else{
    console.log("no");
  }