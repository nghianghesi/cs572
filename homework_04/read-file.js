const fs = require('fs');
process.on('message',(filepath)=>{
    console.log(filepath);
    fs.createReadStream(filepath)
    .on('data', (chunk) => {
        process.send(chunk);
    })
    .on('close', () => { 
        console.log(`end reading`);
        process.send('#ending#');        
    })
    .on('error',(err)=>{
        console.log(`error reading ${err}`);
        process.send(null);
    });
});