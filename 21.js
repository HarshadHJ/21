var card=document.getElementById("cards")
var total=document.getElementById("total")
var message=document.getElementById("message")
var ctotal=document.getElementById("ctotal")
var pcards=[]
var sum1=0
var sum=0
var win=false
var game=true
var startgame=false
var player=prompt("Enter your name")
var amount=prompt("Enter the amount")

function start(){
    startgame=true
    var num3=getrandom()
    var num4=getrandom()
    var num1=getrandom()
    var num2=getrandom()
        sum=num1+num2
        sum1=num3+num4
        pcards=[num1,num2]

        render()
}
function render(){

    card.innerHTML="Cards:  "
    ctotal.innerHTML="Computer Total :"
    
    for(var i=0; i<pcards.length; i++){
        card.innerHTML += ` ${pcards[i]}`
    }
    total.innerHTML= `total : ${sum}`
    ctotal.innerHTML= `Computer Total : ${sum1}`

    if(sum<21){
        message.innerHTML="Do you waant another card"
    }
    else if(sum==21 && sum1<21){
        amount *=2
        message.innerHTML=` Congrats ${player} ,You won Rs.${amount} `
        win=true
    }
    else{
        message.innerHTML=`Sorry ${player} ,Your Rs.${amount} is khatam tata bye bye gaya`
        game=false
    }
}

function getrandom(){
   var random = Math.floor(Math.random()*13+1)

if(random>10){
    return 10
}
else if(random==1){
    return 11
}
else{
    return random
}
}

function newcard(){
// if(startgame==true){

    if(win==false && game==true && startgame==true )
     {
     var num = getrandom()
     pcards.push(num)
     sum += num

       while(sum1<17){
        var cnum = getrandom()
        sum1 += cnum
       }
     
    
     render()
     if(sum>21){
     winner()
     }
}
}
function winner(){
    if(startgame==true){
    while(sum1<17 && sum1<sum){
        var cnum = getrandom()
        sum1 += cnum
       }
       ctotal.innerHTML=`Computer Total : ${sum1}`
    if(sum>21 || (sum1<=21 && sum1>sum))
    message.innerHTML=`Sorry ${player} ,Your Rs.${amount} is khatam tata bye bye gaya`
    else if(sum==sum1){
        message.innerHTML="It is a Tie"
    }
    else{
        amount *=2
        message.innerHTML=` Congrats ${player} ,You won Rs.${amount} `
    }
    game=false
}
}
