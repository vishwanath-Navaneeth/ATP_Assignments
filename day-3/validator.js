function validateTitle(title){
    if(title.lenght==0){
        return "Title is empty"
    }
    if(title.lenght<3){
        return "Title should be at least 3 char"
    }

}
console.log(validateTitle("hi"));

