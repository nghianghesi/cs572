
Array.prototype.asyncFilter = function(filterfunc){
    return new Promise((resolve)=>{      
        const result=[];
        let idx = 0;
        let self = this;
        let dofilter = () => {
            //console.log(idx);
            if(idx < self.length){
                if(filterfunc(self[idx])){
                    result.push(self[idx]);
                }
                idx++;
                setImmediate(dofilter,0);
            }else{
                resolve(result);        
            }
        };
        dofilter();
    });
}

Array.prototype.even = function(){
    return new Promise((resolve)=>{        
        resolve(this.filter((x) => x % 2 == 0));
    });
}

Array.prototype.odd = function(){
    return new Promise((resolve)=>{        
        resolve(this.filter((x) => x % 2 == 1));
    });
}

console.log('start');
let A = [], B=[];
for(let i=0;i<100;i++){
    A.push(i);
    B.push(i);
    B.push(i*2);
}
B.asyncFilter(x=>x%2==1).then(() => console.log ('done odd'));
A.asyncFilter(x=>x%2==0).then(() => console.log ('done even'));

[1,2,3,4,5,6,7,8].even().then((result) => {console.log(result);});
[1,2,3,4,5,6,7,8].odd().then((result) => {console.log(result);});
console.log('end');