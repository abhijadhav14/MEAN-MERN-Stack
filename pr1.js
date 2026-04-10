function factorial(n){
    let fact=1;
    for(let i=1;i<=5;i++){
        fact*i;
    }
    return fact;
}
const number=5;
console.log("Factorial=",factorial(number));


let marks=20;
if(marks>=90){
    console.log("A grade");
}
else if(marks>=75 & marks<90){
    console.log("B grade");
}
else if(marks<=75 & marks>=60){
    console.log("C grade");
}
else if(marks>=50 & marks<60){
    console.log("D grade");
}
else{
    console.log("Fail");
}