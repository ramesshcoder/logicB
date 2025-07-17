// check if given number is palindrome or not
let number=341;
let org=number
let rev=0;
while(number>0){
    a=number%10;
    rev=rev*10+a;
    number=Math.floor(number/10)
    

}
if(rev===org){
    console.log("given number is palindrome",rev);
}else{
    console.log(" given number is not a palindrome number")
}