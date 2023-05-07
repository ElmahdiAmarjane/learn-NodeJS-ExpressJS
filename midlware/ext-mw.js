
 exports.extMW= (req,res,next)=>{
      console.log('the external file content midlware example');
      next();
  }