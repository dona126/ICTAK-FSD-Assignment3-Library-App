const express = require('express');
const updateRoutes = express.Router();

const Bookdata=require('../model/bookAndAuthorData');

function router6(nav)
{ 
    updateRoutes.get('/login', function(req,res){
       
        res.render("login",
        {
            nav,
            title:'Log In',
            
        }
        );//passed as object
     })


     
    
return updateRoutes;
}//fn router ends

module.exports=router6;//exporting to app.js