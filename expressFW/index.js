  
    const express = require('express');
    const joi = require('joi');
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded())
   app.get('/',(req,res)=>{
        res.send("hello from /");
   })
   app.get('/about' , (req , res)=>{
      res.send('hello from about ')
   })
//    app.get('/courses/:id/?',(req,res)=>{ // http://localhost:5000/courses/001
//       res.send(req.params.id);
//        res.send(req.query);              // http://localhost:5000/courses/88/?user=elmahdi
//    })
  // HTTP GET REQUEST => exemple courses //
    let courses = [
        {id:1 , title:'ReactJS' },
        {id:2 , title:'NodeJS' },
        {id:3 , title:'Angular' },
];
  app.get('/courses/:id',(req,res)=>{
       let course = courses.find( course => course.id === parseInt(req.params.id) );
       
       if(!course) res.status(404).send('course not found...');
       else  res.send(course);
  })
/***************************************** */
// HTTP POST REQUEST =>    //
    
          

     let products = [
        { id : 1 , title : "NODEJS"},
        { id : 2 , title : "Angular"},
        { id : 3 , title : "ReactJS"}
     ];
    
    app.post('/api/products',(req,res)=>{

        let schema = joi.object(
            {title : joi.string().alphanum().max(20).min(3).required()}
           )
        let {error , value} = schema.validate(req.body); 
     

        /*
    if(!req.body.title || req.body.title.length < 3){
     */   
     if(error) res.status(400).send('bad request');

    // }
     else{
        let product = {
            id: products.length+1,
            title : value.title
         }
         products = [...products,product];
          res.send(products);
    
    }
  
    })

    app.get('/api/products',(req,res)=>{
         res.send(products);
   })
  
   // PUT REQUEST //

    app.put('/api/products/:id',(req,res)=>{
         
          //validate that course exist
          let product = products.find( product => product.id === parseInt(req.params.id) );
          if(!product) res.status(404).send('course not found...');
           // validate true title
           let schema = joi.object(
            {title : joi.string().alphanum().max(20).min(3).required()}
           )
        let {error , value} = schema.validate(req.body); 
        if(error) res.status(400).send('bad request');

          //modify course
          products[product.id-1].title=req.body.title
           

          // send new courses
            res.send(products);
    })

    // DELETE REQUEST  //

    app.delete('/api/products/:id',(req,res)=>{
        products.splice(req.params.id,1);
        res.send(products);
    })












  const port = process.env.port || 3000;
    app.listen(port,()=>{
        console.log(`connection on port ${port}...`);
    })
      