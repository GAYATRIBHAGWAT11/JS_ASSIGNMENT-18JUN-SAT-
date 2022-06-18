let number=parseInt(process.argv[2]);
let digits, rem;
while(number>0){

    digits =Math.floor(number % 10);

    number = number / 10;

    rem = digits % 2;

    if(rem == 0)

    console.log(digits);

    }
