let enrollmentDeadline = new Date("2026-01-22");
let d1=new Date();

//Task 1
if(d1 < enrollmentDeadline){
    console.log("Enrolement is open");

}
else{
    console.log("Enrollment is closed");

}
//Task 2
let checkdate=new Date("2026-02-30");

const yr=checkdate.getFullYear();
if((yr % 4 === 0 && yr % 100 !== 0) || (yr % 400 === 0)){
    if(checkdate.getMonth()===2 && checkdate.getDate()>29){
        console.log("Invalid Date");
    }
    else{
        console.log("valid Date");
    }
}
else{
    if(checkdate.getMonth()===2 && checkdate.getDate()>28){
        console.log("Invalide Date");

    }
    else{
        console.log("valid Date");
    }
} 