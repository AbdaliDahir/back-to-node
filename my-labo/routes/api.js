const express = require('express');
const router = express.Router();
const Article = require('../models/article');


// get a list of ninjas from the db
router.get('/ninjas', function(req, res, next){
  res.send({type: 'GET'});
});

// add a new ninja to the db
router.post('/ninjas', function(req, res, next){
  // let article = new Article(req.body);
  // article.save();
  Article.create(req.body).then(function(article) {
    res.send(article);
  }).catch(next);
});

// update a ninja in the db
router.put('/ninjas/:id', function(req, res, next){
  Article.findByIdAndUpdate({_id: req.params.id}, req.body).then(function() {
    Article.findOne({_id: req.params.id}).then((article) => {
      res.send(article);
    })
  })
});

// delete a ninja from the db
router.delete('/ninjas/:id', function(req, res, next){
  // req.params.id
  Article.findByIdAndRemove({_id: req.params.id}).then((ninja) => {
    res.send(ninja);
  })
  // res.send({type: 'DELETE'});
});

module.exports = router;