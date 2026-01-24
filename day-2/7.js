//complex Object 
let student={
    sno:100,
    names:'ram',
    marks:[90,89,86],
    address:{
        city:'HYD',
        pincode:555666
    },
    getaverage:function(){
        let sum
        for(let v in  student.marks){
            sum=sum+student.marks[v]

        }
        console.log(sum/3)
    }
}
getaverage()