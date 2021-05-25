const express = require("express");
const Bookdata = require('../model/Bookdata');
const addbookRouter = express.Router();
function router(nav){
    addbookRouter.get('/',function(req,res){
        res.render("addbook",
        {
            nav,
            title:'Add Book'
                    
        });
    });

    addbookRouter.post('/add',function(req,res){
       var item={
        title:req.body.title,
        author:req.body.author,
        genre:req.body.genre,
        image:req.body.image
        }
        var book = Bookdata(item);
        book.save();//saving to database
        res.redirect('/books');
        res.send("I am added.");
    });
    return addbookRouter;
}
module.exports = router;