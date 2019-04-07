var express = require('express');
const extend = require('extend');
var router = express.Router();

const entities = [
    {id:1, name:"Asaad Saad", course:"CS572", grade:95}
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(entities);
});

router.get('/:id', function(req, res, next) {
    const grades = entities.filter(x=>x.id == req.params.id);
    if(grades.length == 1){
        res.status(200).json(grades[0]);
    }else{
        res.status(404).json("grade not found");
    }
});

router.post('/', function(req, res, next) {
    let id = 0;
    entities.forEach(x=> id = x.id > id?x.id:id);
    let grade = null;
    entities.push(grade = {
        id:id+1,
        name:req.body.name,
        course:req.body.course,
        grade:req.body.grade
    });
    res.status(200).json(grade);
});

router.put('/:id', function(req, res, next) {
    const grades = entities.filter(x=>x.id == req.params.id);
    if(grades.length == 1){
        extend(grades[0],{
            name:req.body.name,
            course:req.body.course,
            grade:req.body.grade
        });
        res.status(200).json(grades[0]);
    }else{
        res.status(404).json("grade not found");
    }    
});


router.delete('/:id', function(req, res, next) {
    const idx = entities.findIndex(x=>x.id == req.params.id);
    if(idx>=0){
        entities.splice(idx,1);
        res.status(200).json(true);
    }else{
        res.status(404).json("grade not found");
    }
});

router.head('/', function(req, res, next){
    console.log('head grade');
    res.status(200).send('greads api');
});
  
module.exports = router;
