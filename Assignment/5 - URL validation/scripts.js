/*5. URL validation.
Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://, 
followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters. 
Print a message indicating if the input matches the conditions or not.*/ 

let pattern="https://[a-z]+[0-9]+[!@#$%^&*(){}:<>/.,>?<]+\.[a-z]+|http://[a-z]+[0-9]+[!@#$%^&*(){}:<>/.,>?<]+\.[a-z]+"
let flag="gi"

let Regaone=new RegExp(pattern,flag)

let URLs="http://hrushikesh##?.mahajan"

let test=Regaone.test(URLs)

if (test==true){
    console.log("Matches the conditions")
}
else{
    console.log("Condition not matched")
}
