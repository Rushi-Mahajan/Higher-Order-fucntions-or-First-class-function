/* 1. Reverse String.
The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay 
of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of 
2 seconds before reversing the string. The reversed string should then be printed as output.*/
let input="Hello"

function stringReverse(){
    let reverseString=""
    let testcase=input.length-1
    for(let i=testcase;i>=0;i--){
        reverseString+=input[i]
    }
    console.log("Reverse of string is:-",reverseString)
}

setTimeout(stringReverse,2000)


