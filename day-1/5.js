//employee object with details

let empObj={
    empNo:100,
    name:'ravi',
    age:20
}

//accessing prop
console.log(empObj.empNo)
console.log(empObj.name)
console.log(empObj.age)

//Iterate an Object(for-in loop)

for(let v in empObj){
    console.log(empObj[v])
}

//create Student Object with props rollNO,name,age,city
let StudentObj={
    RollNo:66,
    Name:'Navaneeth',
    age:20,
    city:'MBNR'

}
//accessing 
console.log('Student details')
for(let v in StudentObj){
    console.log(StudentObj[v])
}


//create product object with props productName,Brand,price
let ProdObj={
    productName:'A',
    brand:'Tata',
    price:1100000
}
//accessing
console.log('Product Details')
for(let v in ProdObj){
    console.log(v+'is'+ProdObj[v])
}