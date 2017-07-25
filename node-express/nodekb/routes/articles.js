const express = require('express');
const router = express.Router();

//  Bring in Models
let Article = require('../models/article');
let User = require('../models/user');

// Load Edit Form
router.get('/edit/:id', ensureAuthenticated,(req, res) => {
    Article.findById(req.params.id, (err, article) => {
        res.render('edit_article', {
            title:'Edit Article',
            article:article
        });
    });
});

// Catch Edit Form
router.post('/edit/:id', ensureAuthenticated, (req, res) => {
    let article = {};
    article.title = req.body.title;
    //article.author = req.body.author;
    article.body = req.body.body;

    let query = {_id:req.params.id}

    Article.update(query, article, (err) => {
        if(err){
            console.log(err);
        }else{
            req.flash('success', 'Article Updated');
            res.redirect('/');
        }
    });
});

// Delete Request
router.delete('/:id', (req, res) => {
    if(!req.user._id){
        res.status(401).send();
    }

    let query = {_id:req.params.id}

    Article.findById(req.params.id, (err, article) => {
        if(article.author != req.user._id){
            res.status(401).send();
        } else {
            Article.remove(query, (err) => {
                if(err){
                    console.log(err);
                }else{
                    res.send('Success');
                }
            }); 
        }
    });
});

// Add Route
router.get('/add', ensureAuthenticated, (req, res) => {
    console.log("rendering");
    res.render('add_article', {
        title:'Add Article'
    });
});

// Add Submit POST Route
router.post('/add', (req, res) =>{
    // Validate in front end
    req.checkBody('title','Title is required').notEmpty();
    //req.checkBody('author','Author is required').notEmpty();
    req.checkBody('body','Body is required').notEmpty();

    // Get Errors
    let errors = req.validationErrors();

    if(errors){
        res.render('add_article', {
            title:'Add Article',
            errors:errors
        });
    }else{
        let article = new Article();
        article.title = req.body.title;
        article.author = req.user._id;
        article.body = req.body.body;

        article.save((err) => {
            if(err){
                console.log(err);
                return;
            }else{
                req.flash('success','Article Added');
                res.redirect('/');
            }
        });
    }
});

// Get Single Article
router.get('/:id', (req, res) => {
    Article.findById(req.params.id, (err, article) => {
        User.findById(article.author, (err, user) => {
            res.render('article', {
            article:article,
            author: user.name
            }); 
        });
    });
});

// Access Control

function ensureAuthenticated(req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }else{
        req.flash('danger', 'Please log in');
        res.redirect('/users/login');
    }
}

module.exports = router;