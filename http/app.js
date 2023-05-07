  const http = require('http');


  const server=http.createServer((req,res)=>{
    if(req.url == '/api/courses')
        res.write(JSON.stringify(['Angular' , 'PHP' , 'JavaScript' , 'Nodejs']));
        res.end();
  });


  server.listen(3000);

  server.on('connection', ()=>{ // events ,, connection predifinie dans server
    console.log('new connection...');
  })
  