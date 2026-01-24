let temperatures=[32, 35, 28, 40, 38, 30, 42]


let res=temperatures.filter(function(it){
    return it>35
})
console.log(res)
let fahrenheit = temperatures.map(temp => (temp * 9/5) + 32);
console.log(fahrenheit);

let average =temperatures.reduce((sum, temp) => sum + temp, 0) / temperatures.length;

console.log(average);

let  firstAbove40 = temperatures.find(temp => temp > 40);
console.log(firstAbove40);

let index28 = temperatures.findIndex(temp => temp === 28);
console.log(index28);
