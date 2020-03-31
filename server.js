const express = require('express');
const bodyParser = require('body-parser');
//userRoutes - injecting code from shop.js
const userRoutes = require('./routes/shop');
//adminData - injecting code from admin.js
const adminData = require('./routes/admin');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');  
app.set('views', 'views');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/admin', adminData.router);
app.use(userRoutes);



app.use(function(req, res, next){
    res.status(404).render('404', {
        pageTitle: "Oops! Page Not Found!",
        pageNotFound: "No Luck. Try Again.",
        myVariable: "Hello World!",
        path: ""
    
    });
});


app.listen(process.env.PORT || 3000, function(){
    console.log("Server is running on port 3000");
});


