let arr=[12,87,45,34,45];
let smallest=arr[0];
let largest=arr[0]
for(let i=1;i<arr.length;i++){
    if(arr[i]<smallest){
        smallest=arr[i]
    }
    if(arr[i]>largest){
        largest=arr[i]
    }
}
console.log("smallest number is :",smallest);
console.log("largest number is :",largest);
