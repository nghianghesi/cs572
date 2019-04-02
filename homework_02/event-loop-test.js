setTimeout(()=>{console.log('timeout');setImmediate(()=>{console.log('immedidate 2')});},0);
setTimeout(()=>{console.log('timeout 100');},100);
setTimeout(()=>{console.log('timeout 2');},2);
setImmediate(()=>{
    console.log('immedidate');
    queueMicrotask(()=>{console.log('micro task 2');});
    setImmediate(()=>{
        console.log('immedidate 3');
    });    
});
new Promise(function(resolve, reject){setTimeout(()=>{resolve('promise-timeout');},0);})
.then((res)=>{console.log(res);});
new Promise(function(resolve, reject){setImmediate(()=>{resolve('promise-immediate');},0);})
.then((res)=>{console.log(res);});
queueMicrotask(()=>{console.log('micro task');});
process.nextTick(()=>{console.log('next tick')});

