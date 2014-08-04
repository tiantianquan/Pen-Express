var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost', 'PenDb');
var ArticleSchema = require('../models/Article.js').ArticleSchema;
var Article = db.model('article', ArticleSchema);

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/get-data', function (req, res) {
    Article.find({},function(error,articles) {
        res.json(articles[0]);
    });
});

router.post('/post-data', function (req, res) {

    Article.findByIdAndUpdate(req.body._id, req.body, function(err,doc){
        if (err || !doc) {
            throw 'Error';
        }

    });
});

module.exports = router;
