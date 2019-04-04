const os = require('os');
const {Subject} = require('rxjs');

const osSubject = new Subject();
osSubject.subscribe((message) => {
    console.log(message);
},(err)=>{
    console.log(err);
},()=>{
    console.log('System is checked successfully');  
}); 

osSubject.next('Checking your system ...');
let checked = true;
const requiredGBSize = 4;
const requiredCores = 2;

osSubject.next('Checking RAM ...');
if(os.totalmem() < requiredGBSize * 1024 * 1024 * 1024){
    osSubject.error(`This app needs at least ${requiredGBSize}GB of RAM`);
    checked = false;
}

osSubject.next('Checking processor ...');
if(os.cpus().length < requiredCores){  
    osSubject.error('Processor is not supported');  
    checked = false;
}

if(checked){
    osSubject.complete();
}