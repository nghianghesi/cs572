const MongoClient = require('mongodb').MongoClient;
const express = require('express');

const client = new MongoClient('mongodb://localhost:27017');
const router = express.Router();
const collectionname = 'places';

router.use((req, res, next)=>{
    client.connect((err)=>{
        if(!err){
            req.db = client.db('homework08');        
            req.db.collection(collectionname);
            next();
        }else{
            next('database error');
        }
    });
});

router.post('/',(req, res, next) =>{
    let query = {category:req.body.category, 
                location:{'$near':{'$geometry':{
                                        type:'Point',
                                        coordinates:[-91.9665342,41.017654]},
                                    '$maxDistance':2000}}};
    if(req.body.search){
        query.name=`/${req.body.search}/`;
    }
    console.log(query);

    req.db.collection(collectionname).find(query).project({_id:0}).toArray((err, result)=>{
        if(!err){
            res.status(200).json(result);
        }else{
            res.status(500).json('database error');
        }
    });
});

module.exports =router;
