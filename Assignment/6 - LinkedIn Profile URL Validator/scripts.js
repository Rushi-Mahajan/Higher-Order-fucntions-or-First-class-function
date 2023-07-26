/*6. LinkedIn Profile URL Validator.

As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are 
formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https://
www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and 
end with a letter or digit. The length of the profile ID should be between 5 and 30 characters.

The program should use a regular expression to match valid LinkedIn profile URLs, and should not match URLs 
that do not follow this format or contain invalid characters. The program should provide clear output messages 
indicating whether each input is a valid LinkedIn profile URL or not.*/


let pattern="https://www.linkedin.com/in/[A-Za-z]+[0-9]+[-]*[A-Za-z]+|https://www.linkedin.com/in/[A-Za-z]+[0-9]+[_]*[A-Za-z]+"
flag="g"
let Regexpress=new RegExp(pattern,flag)

let urls="https://www.linkedin.com/in/Hrushikesh02_AaA"

let urltestResult=Regexpress.test(urls)
console.log(urltestResult)
let profileId=""

let i=urls.length
while(i>0){
    if(urls[i]==undefined){
        i--
        continue
    }
    if(urls[i]=="/")
    {
        break
    }else{
        profileId+=urls[i]
        i--
    }
}

let lengthProfileId=profileId.length

if(urltestResult==true && (lengthProfileId>= 5 && lengthProfileId<=30)){
    console.log("Conditions Matched")
}else{
    console.log("Conditions is not Matched")
}
