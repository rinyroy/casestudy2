const express = require("express");
const Bookdata = require('../model/Bookdata');
const updatebookRouter = express.Router();
function router(nav){
    updatebookRouter.get('/',function(req,res){
        res.render("updatebook",
        {
            nav,
            title:'Update Book'
                    
        });
    });

    updatebookRouter.post('/update',function(req,res){
        //var newitem={
            const uptitle=req.body.title;
            const upauthor=req.body.author;
            const upgenre=req.body.genre;
            const upimage=req.body.image;
        //}
        
        Bookdata.updateOne({title:uptitle},{$set:{genre:upgenre,author:upauthor,image:upimage}})
        //var book = Bookdata(item);
        //book.save();//saving to database
        .then(function(books){
            res.redirect('/books');
        res.send("I am updated.");
        })

        //var file = req.body.image;
    //var filename = req.body.image.name;

    
    /*file.mv("./public/images/"+filename,function(err){
        if(err){
            res.send(err);
        }
    });*/
        
    });

    
    return updatebookRouter;
} 

/*updatebookRouter.post('/update',function(req,res){
    
    const uptitle = req.query.title;
    const upgenre = req.query.genre;
    const upimage = req.query.image;
    Bookdata.updateOne({title:uptitle},{$set:{genre:upgenre,image:upimage}})
    // bookdata.find()
        .then(function(books){
            res.redirect('/books');
    //      res.render("books",
    // {
    //     nav:[{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'},{link:'/addbook',name:'ADD BOOK'},{link:'/addauthor',name:'ADD AUTHOR'}],
    //     nav1:[{link:'/',name:'LOG OUT'}],
    //     books
    // });
    })
    var file = req.files.image;
    var filename = req.files.image.name;

    
    file.mv("./public/images/"+filename,function(err){
        if(err){
            res.send(err);
        }
    });

    // .then(function(books){
    //     bookdata.find()
    //     .then(function(books){
    //      res.render("books",
    //  {
    //     nav:[{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'},{link:'/addbook',name:'ADD BOOK'},{link:'/addauthor',name:'ADD AUTHOR'}],
    //     nav1:[{link:'/',name:'LOG OUT'}],
    //      books
    //  });
    //  })
    // })
});*/
module.exports = router;
