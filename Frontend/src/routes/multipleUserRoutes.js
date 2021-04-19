const express = require('express');
const multipleUserRoutes = express.Router();

const Bookdata=require('../model/bookAndAuthorData');

function router8(nav)
{ 
    
    if("[@authfield:Admin]" == "Yes")

    {
        window.location = "http://www.mysite.com/admin.html";
        // Redirect to index page (not admin)
        multipleUserRoutes.get('/index', function(req,res){
        // const id=req.params.id;
        res.render('index',
        {
            nav,
            title:'House of Books'
        }
        );//passed as object
      });
    
    
    }
    
    
    
    
    
    
    else if ("[@authfield:Manager]" == "Yes")
    {
        window.location = "http://www.mysite.com/manager.html";
        // Redirects to add book page (admin)
        multipleUserRoutes.get('/addpage', function(req,res){
        // const id=req.params.id;
        res.render("addpage",
        {
            title:'Add new book',
            
        }
        );//passed as object
       });
    
    }
    
    
    
    
    
    else if ("[@authfield:Manager]" == "Yes")
    {
        window.location = "http://www.mysite.com/employee.html";
        // Redirects to update page  (admin)
        multipleUserRoutes.get('/update', function(req,res){
        // const id=req.params.id;
        res.render("update",
        {
            title:'Update details',
            
        }
        );//passed as object
      });
    
        }
    
    
    
    
    
    else
    {
        // Deletes the book or author  (admin)
        multipleUserRoutes.get('/delete', function(req,res){
        // const id=req.params.id;
        res.redirect('/index');
       });
    }
    
    
    
     
    
return multipleUserRoutes;
}//fn router ends

module.exports=router8;//exporting to app.js










































