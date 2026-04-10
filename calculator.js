let a=90;
let b=10;
prompt =require("prompt-sync")();
console.log("add=",a+b);
console.log("sub=",a-b);
console.log("mul=",a*b);
console.log("div=",a/b);
let choice=prompt();
switch(choice){
    case "add":
        console.log("add=",a+b);
        break;
    case "sub":
        console.log("sub=",a-b);
        break;
    case "mul":
        console.log("mul=",a*b);
        break;  
    case "div":
        console.log("div=",a/b);
        break;  
    default:
        console.log("invalid choice");
}   

