
   const express = require('express');
   const extMW = require('./ext-mw');
   const helmet = require('helmet');
   const morgan = require('morgan');
   const config = require('config');
    const app = express();
    // app.use(express.json());
    // app.use(express.urlencoded()) //des midlwares deja existe en expressJS
    app.use(express.static('public')) //pour pouvoir acceder au dossier public dans navigateur
   app.use(helmet());
  
//****      environnement de l'application        ****/

console.log(`NODE_NV = ${process.env.NODE_ENV} `);
console.log(`MODE = ${app.get('env')} `);
 
console.log(`app name :${config.get('name')}`);
console.log(` mail - host name :${config.get('mail.host')}`);
console.log(` mail - host password :${config.get('mail.password')}`);

if(app.get('env') == 'development')  app.use(morgan('tiny'));




/************************************************** */





app.use(extMW.extMW);
app.use((req,res,next)=>{
    console.log('En cours....');
    next();
})

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




const port = process.env.port || 3000;
    app.listen(port,()=>{
        console.log(`connection on port ${port}...`);
    })