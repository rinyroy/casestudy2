const express = require("express");
const Validate = require("../model/Validate");

const signupRouter = express.Router();
function router(nav){
    signupRouter.get('/',function(req,res){
        res.render("signup",
        {
            nav,
            title:'Sign Up'
                    
        });
    });


    signupRouter.get('/signup',function(req,res){
        var item={
            name: req.query.name,
            psw: req.query.psw
        }
        var data = Validate(item);
        data.save();
        Validate.find()
        .then(function(){
            res.render("signin",
            {
                nav1:[{link:'/signup',name:'SIGN UP'},{link:'/signin',name:'SIGN IN'}]
            }); 
        })
    });
    
    
    return signupRouter;
}
module.exports = router;