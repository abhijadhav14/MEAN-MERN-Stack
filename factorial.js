function factorial(n){
    let fact = 1;
    for(let i = 1; i <= n; i++){
        fact = fact * i;   
    }
    return fact;
}

const number = 5;
console.log("Factorial =", factorial(number));
