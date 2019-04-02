/**
 * http://usejsdoc.org/
 */
const { from } = rxjs;
const { filter,map,reduce } = rxjs.operators;

String.prototype.filterWordsES6 = function(words){
	return this.split(" ").filter((w) => words.indexOf(w) < 0).join(" ");
}	

String.prototype.filterWordsPromises = function(words){
	const src = this;
	return new Promise(function(resolve,reject){		
		resolve(src.filterWordsES6(words));
	});
}		

String.prototype.filterWordsAsyn = async function (words, callback){
	try{
		const res = await this.filterWordsPromises(words);	
		callback(res);		
	}catch(error){
		return error;
	}
}

String.prototype.filterWordsObservables = function(words){
	return from(this.split(" ")).pipe(
		filter((w)=>words.indexOf(w) < 0),
		reduce((acc,x) => acc+" "+x, ""),
		map(acc => acc.slice(1))
	);
}

console.log("This house is nice! (es6)".filterWordsES6(['house','nice']));
"This house is nice! (promise)".filterWordsPromises(['house','nice']).then(res => {console.log(res)});
"This house is nice! (async)".filterWordsAsyn(['house','nice'], (res) => console.log(res));
"This house is nice! (observable)".filterWordsObservables(['house','nice']).subscribe((str)=>{console.log(str)});
console.log("done!");