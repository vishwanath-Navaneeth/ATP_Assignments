
//create HTTP server
    //import express module
    import exp from 'express'
    import {userApp} from  './APIs/UserAPI.js'
    import { productApp } from './APIs/ProductAPI.js'
    //create server
    const app=exp()
    //Assign port Number
    app.listen(3000,() => console.log('HTTP server listening on port 3000..'))
    
    //body passing middleware
    app.use(exp.json())

    //forward req to userApp when path starts with '/user-api'
    //forward req to productApp when path starts with '/product-api'
    app.use('/user-api',userApp)
    app.use('/product-api',productApp)
