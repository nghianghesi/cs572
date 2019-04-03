const htttp = require('http');
const fs = require('fs');
const url = require('url');
const server = htttp.createServer();
const datafile='dummy.txt';
server.on('request',(req,res)=>{    
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        "content-disposition": "attachment; filename=" + datafile
    });    
    const requestdata = url.parse(req.url, true).query;
    let writeBuffferSize = 0;
    if(requestdata.async == 'pipe'){
        console.log('pipe response');
        fs.createReadStream(datafile).pipe(res);
    }else if(requestdata.async == 'stream'){
        console.log('stream response');
        const readstream = fs.createReadStream(datafile).on('data',(chunk)=>{
            if(++writeBuffferSize > 10){
                readstream.pause();    
            }
            res.write(chunk,()=>{
                if(--writeBuffferSize < 5){
                    readstream.resume();    
                }    
            });
        })
        .on('close',() => {
            res.end();
        });
    }else{
        res.write(fs.readFileSync(datafile));
        res.end();
    }
})
server.listen(9000);