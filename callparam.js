function calculate(a,b,callback){
    let sum=a+b;
    callback(sum);
}

calculate(5,10,function(sum){
    console.log("The sum is : ",sum);
})