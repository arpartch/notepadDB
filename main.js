const express = require('express');
const body_parser = require('body-parser');
const path = require('path');
const pug = require('pug');
const Notes = require("./database");
const updateRouter = require("./update-router");

const app = express();

app.set('view engine', 'pug');
app.set('views',path.join(__dirname, "views"));

app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json());
app.use('/updatepage', updateRouter);
app.use((req, res, next)=> {
    console.log(req.method + " : " + req.url);
next();
})

app.get(("/notes-add"),(req,res,next)=>{
    res.render('notes-add');
})

app.post( (req,res,next)=> {
    console.log(req.body);
    const Note = new Notes({})
    
    Note.title = req.body.title
    Note.description = req.body.description
          //save notes first
    Note.save((err,product)=>{
            if(err) console.log(err);
            console.log(product);
    })
res.redirect('/index')
})