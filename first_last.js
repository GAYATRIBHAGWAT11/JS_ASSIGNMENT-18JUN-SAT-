let num=parseInt(process.argv[2])

let firstDigit=Math.floor(num/100);
  let lastDigit=num%10;
  console.log(firstDigit+ " " +lastDigit);