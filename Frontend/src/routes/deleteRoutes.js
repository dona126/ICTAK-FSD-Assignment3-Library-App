const express = require('express');
const deleteRoutes = express.Router();

const Bookdata=require('../model/bookAndAuthorData');

function router7(nav)
{ 
    deleteRoutes.get('/login', function(req,res){
       
        res.render("login",
        {
            nav,
            title:'Log In',
            
        }
        );//passed as object
     })
//     deleteRoutes.get('/', function(req,res){
 


//    });



     
    
return deleteRoutes;
}//fn router ends

module.exports=router7;//exporting to app.js