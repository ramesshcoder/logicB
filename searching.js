let array=[12,87,98,12,56,43];
let targetElement=43;
let found=false;
for(let i=0;i<=array.length-1;i++){
    if(array[i]===targetElement){
        console.log("found at",i);
        found=true
        
    }
}
if(!found){
    console.log("no match found")
}