const express = require("express");
const loginRouter = express.Router();
const Validate = require('../model/Validate');
function router(nav){
    loginRouter.get('/',function(req,res){
    res.render("login",
    {
        nav,
        title:'Log In'                
    });
});


loginRouter.get('/done',function(req,res){
    const uname = req.query.uname;
    const upsw = req.query.psw;
    // detdata.find({name:uname,psw:upsw})
    // .then(function(){
    //     res.redirect('/books');
    // })
    Validate.findOne({name:uname,psw:upsw}, function(err, result) {
        // if (err) return reject(err); alert("error");
        if (result) res.redirect('/books');// enter your correct username and password
        else res.redirect('/login');
      });
    
});
    return loginRouter;
}
module.exports = router;