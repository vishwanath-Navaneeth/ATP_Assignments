//functions--------->(Write once --- use multiple times)

//function declaration
function sum(a,b){
    let sum=a+b;
    return sum
}
//function calling
console.log(sum(67,14))
console.log(typeof sum)

//TASK 1
function great(a,b,c){
    if(a>b && a>c){
        console.log(a)
    }
    else if( b>c){
        console.log(b)
    }
    else{
        console.log(c)

    }
}
great(50,5,25)

//TASK 2
function cal(t){
    console.log(t=t+500);
    console.log(t=t-200);
    console.log(t=t+(0.18*t));

}
cal(500)