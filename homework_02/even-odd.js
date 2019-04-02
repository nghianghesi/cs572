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
[1,2,3,4,5,6,7,8].even().then((result) => {console.log(result);});
[1,2,3,4,5,6,7,8].odd().then((result) => {console.log(result);});
console.log('end');