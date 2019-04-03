const dns = require('dns');
const {promisify} = require('util')

dns.lookup('www.mum.edu', (err, address, family) => {
  console.log(`callback -> address: ${address} family: ${family}`);
});

let dnslookup = promisify(dns.lookup);
dnslookup('www.mum.edu')
.then((res) => {
  console.log(`promisify -> address: ${res.address} family: ${res.family}`);
}).catch((err) => {
  console.log(err);
});

(async function(){
  try{
    let res = await dnslookup('www.mum.edu');  
    console.log(`try-catch -> address: ${res.address} family: ${res.family}`);
  }catch(err){  
    console.log(err);
  }
})();