//bubble sorting
let arr=[20,60,40,10,70,80,90,50,30];
let n=arr.length
for(let i=0;i<=n-1;i++
){
    for(j=0;j<=n-i-1;j++
    ){
        if(arr[j]<arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        };
    };
};
console.log(arr);
