const http = require('http');
const {fork} = require('child_process');
const url = require('url');
const path = require('path');



const server = http.createServer();
server.on('request',(req,res)=>{    
    const requestdata = url.parse(req.url, true).query;
    const filepath = path.parse(requestdata.path);
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        "content-disposition": `attachment; filename=${filepath.name}${filepath.ext}` 
    });    
    const pRead = fork('./read-file.js');
    pRead.on('message',(chunk) => {
        if(chunk!=null && chunk!='#ending#' && chunk.type=="Buffer"){
            res.write(Buffer.from(chunk.data));
        }else{            
            if(chunk=='#ending#'){
                console.log('end response');
                res.end();
                pRead.kill();
            }
        }
    });

    pRead.send(`${path.join(filepath.dir, filepath.name)}${filepath.ext}`); 
});

server.listen('9000');