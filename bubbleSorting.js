let array=[20,90,50,10,80,100]
let n=array.length
for(let i =0;i<=n-1;i++){
    for(let j=0;j<=n-1-i;j++){
        if(array[j]>array[j+1]){
            let temp=array[j];
            array[j]=array[j+1];
            array[j+1]=temp
        }
    }

}
console.log(array);


