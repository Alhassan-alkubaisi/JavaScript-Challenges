let name = "hassan"
let age = "20"
let isStudent = true
let result = 5+3
let massage = "hello, " + name + "\nhow are you? "

//---------------------

let num = 15
if(result > 15){
    console.log("Number is breater then 10")
}
if(num %2 === 0 ){
    console.log("num is even")
}else{
    console.log("num is odd")
}

let gread = 70

if (gread >= 60){
    console.log("passed")
}else{
    console.log("Failed")
}

let day = "saturday"

switch (day) {
    case "saturday":
        console.log("start of the week")
        break;
    case "friday":
        console.log("end of the week")
    default:
        console.log("regular day")
        break;
}

let Qage = age>=18? "you can enter to app" : "sorry you can not enter to app"
console.log(Qage)

//---------------------

for(let i = 1; i<=5 ; i++){
    console.log(i)
}
let i =1
while(i<=10){
    if(i%2===0){
        console.log(i)
    }
    i++
}
let input;

do {
    input = prompt("enter the number ");

    
} while (input <= 0 );


let names = ["ahmad","hassan", "anas"]

for(let i =1; i<= names.length; i++){

    console.log(names[i])
}

let numbers =[1,2,3,4,5,6,7]

let sum =0;
for(let i =0; i<numbers.length-1; i++){

    sum += numbers[i]
}

console.log("total numbers =" + sum)

//---------------------
let colors = ["red","blue","grean"]
console.log(colors[1]);
colors.push("black");
colors.shift();
colors[1] ="grey";

console.log(colors)

//---------------------

function add(a,b){
    return a+b;

}
function isEven(num){
    if(num%2 ===0){
        return "num is Even"
    }
    else{
        return "num is odd"
    }
}

function greet( name){
    return "hello" + name;
}
function calculatArea(r){
    return Math.PI * Math.pow(r,2)
}
function reverseString( text){
    return text.split(" ").reverseString().join("")
}

