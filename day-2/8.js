let marks=[90,40,78,89]
let empty=[]
for(let v of marks){
    if(v>70){
        empty.push(v)
    }
}
console.log(empty)

let res=marks.filter(function(element){
    return element>70
})
console.log(res)