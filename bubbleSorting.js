// bubble sort
let arr=[12,32,56,89,76,0];
let n=arr.length;
for(let i=1;i<=n-1;i++){
    for(let j=0;j<=n-1-i;j++){
        if(arr[j]>arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}
console.log( "sorted array is",arr);
