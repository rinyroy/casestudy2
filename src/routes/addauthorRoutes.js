const express = require("express");

const addauthorRouter = express.Router();
function router(nav){
    addauthorRouter.get('/',function(req,res){
        res.render("addauthor",
        {
            nav,
            title:'Add Author'
                    
        });
    });
    return addauthorRouter;
}
module.exports = router;