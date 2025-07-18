let arr = [56,9,7,4,3,];
let smallest = arr[0];
for (let i = 1; i < arr.length; i++) {
    if(
        arr[i]>smallest
    ){
        smallest=arr[i]
    }
}
console.log(smallest,": is smallest number in given array");
