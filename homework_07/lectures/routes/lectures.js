var express = require('express');
var router = express.Router();
const {MongoClient, ObjectId} = require('mongodb'); // or ObjectID 


const client = new MongoClient('mongodb://localhost:27017');

let lecturesCollection = null;
const paginationLimit = 20;
client.connect((err)=>{
    const db = client.db('homework07');
    lecturesCollection = db.collection('lectures');
});


function handleList(query, req, res, next){
    lecturesCollection.find(query).count(
        (err, count)=>{
            res.set({
                "Pagination-Count": (count+paginationLimit-1)/paginationLimit,
                "Pagination-Page": 1, 
                "Pagination-Limit": paginationLimit
            });
        
            if(req.method == 'GET'){
                lecturesCollection
                .find(query).limit(paginationLimit)
                .toArray((err, docArr)=>{
                    if(!err){
                        res.status(200).json(docArr);
                    }else{
                        next({'message':'query database error'});
                    }
                });        
            } else{
                res.end();
            }        
        }
    );
}

/* GET users listing. */
router.get('/', function(req, res, next) {    
    return handleList({}, req, res, next);
});

router.get('/:id', function(req, res, next) {
    if(req.method == 'GET'){
        lecturesCollection
        .findOne({_id:ObjectId(req.params.id)}, (err, doc)=>{
            if(!err){
                if(doc){
                    res.status(200).json(doc);
                }else{
                    res.status(400);
                    res.json('document not found');
                }
            }else{
                next({'message':'query database error'});
            }
        });
    }else{
        res.end();
    }
});

router.get('/search/:q', function(req, res, next) {   
    const query = {
        $or:[{'course': {$regex:req.params.q, $options: '-i'}},
                {'lecture':{$regex:req.params.q, $options: '-i'}}]
    };
    return handleList(query, req, res, next);
});

router.post('/', function(req, res, next) {
    lecturesCollection.insertOne(
        {
            course:req.body.course,
            lecture:req.body.lecture
        },
        (err, doc)=>{
            if(!err && doc.result.n>0){
                res.status(200).json(doc.ops[0]);
            }else{
                next({'message':'database error'});
            }
    });
});

router.put('/:id', function(req, res, next) {
    console.log(req.params.id);
    console.log(ObjectId(req.params.id));
    lecturesCollection.findOneAndReplace(
        {_id:ObjectId(req.params.id)},
        {
            course:req.body.course,
            lecture:req.body.lecture
        },
        (err, doc)=>{
            if(!err){
                if(doc && doc.value){
                    res.status(200).json(doc.value);
                }else{
                    res.status(400).json('not found');
                }
            }else{
                next({'message':'database error'});
            }
    });
});


router.delete('/:id', function(req, res, next) {
    lecturesCollection.findOneAndDelete(
        {_id:ObjectId(req.params.id)},
        (err, doc)=>{
            if(!err){
                if(doc && doc.value){
                    res.status(200).json(doc.value);
                }else{
                    res.status(400).json('not found');
                }
            }else{
                next({'message':'database error'});
            }          
        }
    );
});

  
module.exports = router;
