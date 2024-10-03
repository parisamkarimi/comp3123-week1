function welcome(){
    console.log('welcom to the class');
}

function greet(name){
    console.log(`Hello,${name}`);
}

console.log(typeof welcome);
console.log(typeof greet); 

var welcome = function(){
    console.log('welcome to the class');
}

var welcome =() => {
    console.log('welcome to the class');
}

var greet = name => console.log(`Hello,${name}`);
var add = (a,b) => a + b
var add = (a,b)  => {
    return a+b

}