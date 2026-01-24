import exp from 'express';
const App = exp();

App.listen(3000,()=>{
    console.log("Server is running ");
});
App.get('/',(req,res)=>{
    res.send("Hello World");
});

