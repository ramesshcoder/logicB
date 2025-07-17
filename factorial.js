function factorialOf(num){
    let fact=1;
    if(num===0){
        console.log("factoral is 1")
        
    }else{
        
        for(let i=num;i>=1;i--){
            fact=fact*i
            
        }
        
console.log(fact)
    }
    

}
factorialOf(3)