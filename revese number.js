let number=121;
let org=number
let reversed=0;//empty var
while(number>0){
    let digit=number%10;//hold remainder
    reversed=reversed*10+digit;//storing the last value
    number=Math.floor(number/10)//eleminating the last number
}
console.log(org);
console.log(reversed);
if(org===reversed){
    console.log("given number is palindrom")
}else{
    console.log("the given number is not palindrom")
}

