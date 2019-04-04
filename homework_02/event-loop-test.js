/*setTimeout(()=>{console.log('timeout');setImmediate(()=>{console.log('immedidate 2')});},0);
setTimeout(()=>{console.log('timeout 100');},100);
setTimeout(()=>{console.log('timeout 2');},2);
setImmediate(()=>{
    console.log('immedidate');
    queueMicrotask(()=>{console.log('micro task 2');});
    setImmediate(()=>{
        console.log('immedidate 3');
    });    
});
new Promise(function(resolve, reject){
    console.log('promise body');
    setTimeout(()=>{resolve('promise-timeout');},0);
})
.then((res)=>{
    console.log(res);
    setTimeout(()=>{console.log('timeout-then')},0);
    setImmediate(()=>{console.log('immediate-then')},0);
    process.nextTick(()=>{console.log('next tick - then')});
});
new Promise(function(resolve, reject){setImmediate(()=>{resolve('promise-immediate');},0);})
.then((res)=>{console.log(res);});
new Promise(function(resolve, reject){resolve('promise-direct');}).then((res)=>{console.log(res);});

queueMicrotask(()=>{console.log('micro task');});
process.nextTick(()=>{console.log('next tick')});*/


/*new Promise(function(resolve, reject){
    console.log('promise body');
    resolve('promise');
})
.then((res)=>{
    console.log(res);
    setImmediate(()=>{console.log('immediate-then')});
    setTimeout(()=>{console.log('timeout-then')},0);
    process.nextTick(()=>{console.log('next tick - then')});
    new Promise(function(resolve, reject){
        resolve('promise-promise');
    }).then((res)=>{console.log(res);});
});
setTimeout(()=>{
    console.log('timeout');
    process.nextTick(()=>{console.log('next tick - tm')});
    setImmediate(()=>{console.log('immediate-tm');});
    setTimeout(()=>{console.log('timeout-tm');},0);
},0);
console.log('done');

setTimeout(()=>{
    console.log('timeout');
    process.nextTick(()=>{console.log('next tick - tm')});
    setImmediate(()=>{console.log('immediate-tm');});
    setTimeout(()=>{console.log('timeout-tm');},0);
},0);
console.log('done');*/

var promise2 = new Promise(function(resolve2, reject2){
    new Promise(function(resolve, reject){
        setTimeout(() =>{
            console.log('before then');
            setTimeout(()=>{console.log('timeout before promise');},0);
            setImmediate(()=>{console.log('immedidate before promise');});
            resolve('promise');
            console.log('after resolve');
            process.nextTick(()=>{console.log('next tick 1')});
        },0);
    })
    .then((res)=>{
        console.log('promise-then');
        console.log(res);
        resolve2('promise2');        
        console.log('after resolve 2');
        process.nextTick(()=>{console.log('next tick 2')});
    });

}).then((res) => {    
    console.log('promise2-then');
    console.log(res);
});