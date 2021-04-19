const express = require('express');
const loginRouter = express.Router();

function router3(nav)
{ 
    
loginRouter.get('/', function(req,res){
    res.render("login",
    {
        nav,
        title:'Log In',
       
    }
    );//passed as object
});



return loginRouter;
}//fn router ends

module.exports=router3;//exporting to app.js


