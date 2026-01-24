//Task 1
let d1=new Date()

console.log(d1);
//Task 2
console.log("Year:",d1.getFullYear());

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
console.log("Month:", monthNames[d1.getMonth()]);
console.log("date:",d1.getDate());

const dayNames = [
  "Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday"
];

console.log("Day:", dayNames[d1.getDay()]);
console.log("Hours:",d1.getHours());
console.log("Min:",d1.getMinutes());
console.log("Seconds:",d1.getSeconds());

//Task 3
console.log(d1.getDate()+"-"+monthNames[d1.getMonth()]+"-"+d1.getFullYear()+" "+d1.getHours()+":"+d1.getMinutes()+":"+d1.getSeconds());


//getFullYear()
//getMonth()
//getDate()
//getDay()
//getHours()
