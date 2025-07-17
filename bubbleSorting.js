let arr=[3,8,5,9,0,3,2,7];
let n=arr.length;
for (let i=0;i<=n-1;i++){
    for(let j=0;j<=n-1-i;j++){
        if(arr[j]>arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }

    }
}
console.log("sorted array is ",arr);
