let promiseobj=new Promise((fullfill,reject)=>{
    settimeout(()=>{
        if(futureavailability==true){
            fullfill("Hello ...How are you")
        }else{
            reject("Sorry not available")
        }
    },5000);
})

