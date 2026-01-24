//Array(ordered collection)
let marks =[90,87,89]
let skills=['html','js','angular']

// Access elements
console.log(marks[1])
console.log(skills)
console.log(marks[1])

//Iterate 
//for-of loop
let sum=0
for(let v of marks){
    sum=sum+v
}
console.log(sum)


//write a function that receives marks as array and returns the small element
function small(marks){
    let temp=0
    let small=marks[0]

    for(let v of marks){
        if(small>v){
            small=v
        }
    }
    return small
}
console.log(small(marks))


/*write a function that receives "skills" array and "skillName" as 
  arrguments and return the index if skillName existed,Otherwise "skill not found" */

  
function check(skils,skillName){
    for(let v of skillName){
        if(v===)
    }
}