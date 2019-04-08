var express = require('express');
var router = express.Router();
const MongodbClient = require('mongodb').MongoClient;
var simpleencryptor = require('simple-encryptor');

const client = new MongodbClient('mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01');
let messagesCollection = null;
client.connect((err)=>{
    const db = client.db('homework01');
    messagesCollection = db.collection('data');
});


/* GET users listing. */
router.get('/', function(req, res, next) {    
    messagesCollection.findOne({},(err, doc)=>{
        if(err){
            return next({message:'database error'});
        }
        if(!doc || !doc.key || !doc.message){
            res.status(400).json('data not found');
        }
        const encryptor = simpleencryptor(doc.key);
        var decrypted = encryptor.decrypt(doc.message);
        res.status(200).json(decrypted);
    });
});

module.exports = router;