/* 2. Random Number Generator with Delay and Progress Indication: The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a 
variable so can be modified. The program displays a message every second indicating the time remaining 
until the random number is generated and then outputs the generated number.*/
delay=3
let changedelay=false
let interval=setInterval(()=>{
    let changedelay=false
    if(delay<=3){
        console.log(delay," Second pending to generate an number")
        if(delay==1){
            console.log(Math.random())
            delay=3
            changedelay=true
        }
        if(changedelay==false){
        delay--
        changedelay=false
        }
    }
    else{
        clearInterval(interval)
    }
},1000)
