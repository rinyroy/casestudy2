const express = require("express");
const Bookdata = require('../model/Bookdata');
const deletebookRouter = express.Router();
function router(nav){
    deletebookRouter.get('/',function(req,res){
        res.render("deletebook",
        {
            nav,
            title:'Delete Book'
                    
        });
    });

   /* deletebookRouter.post('/delete',function(req,res){
       var item={
        title:req.body.title,
        author:req.body.author,
        genre:req.body.genre,
        image:req.body.image
        }
        var book = Bookdata(item);
        book.save();//saving to database
        res.redirect('/books');
        res.send("I am updated.");
    });*/

        deletebookRouter.post('/delete',function(req,res){
        const deltitle = req.query.title;
        Bookdata.deleteOne({title:deltitle})
        .then(function(books){
            res.redirect('/books');
            console.log("book deleted");
        })
    });
    return deletebookRouter;
}
module.exports = router;