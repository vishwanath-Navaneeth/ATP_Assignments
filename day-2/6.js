//MUtable(all ref types are mutable)
//All primitives are immutable,we can't change them 

let emp={
    empNo:1,
    name:'ravi',
}

//accesing prop
console.log(emp.empNo)

//Adding now new prop
emp.city='Hyd'

//update a prop
emp.empNo=123;
console.log(emp)

//delete a prop
delete emp.name;
console.log(emp)

//freeze an object
Object