const MongoClient = require('mongodb').MongoClient;
const express = require('express');

const client = new MongoClient('mongodb://localhost:27017');
const router = express.Router();
const collectionname = 'fairfieldlocations';

router.all((req, res, next)=>{
    client.connect((err)=>{
        if(!err){
            req.db = client.db('homework07');        
            reg.db.collection(collectionname);
        }else{
            next('database error');
        }
    });
});

router.post('/',(req, res, next) =>{
    let query = {category:req.body.category, 
                location:{'$near':{'$geometry':{
                                        type:'Point',
                                        coordinates:[41.017654,-91.9665342]},
                                    '$maxDistance':2000}}};
    if(req.body.search){
        query.name=`/${req.body.search}/`;
    }
    this.db.collection(collectionname).find(query,{_id:0},(err, result)=>{
        if(!err){
            res.status(200).json(result.ops);
        }else{
            res.status(500).json('database error');
        }
    });
});
