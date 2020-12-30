const express = require('express');
const app = express();
const path = require("path");
const hbs = require('hbs');

//agr port hai toh thik ni toh 8000
const port = process.env.PORT || 8000;
const staticpath = (path.join(__dirname,"../public"));
const template_path = (path.join(__dirname,"../templates/views"));
const partials_path = (path.join(__dirname,"../templates/partials"));

app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);
//publish static path
app.use(express.static(staticpath));




//routing
app.get("/",(req, res)=>{
    res.render('index');
});

app.get("/about",(req, res)=>{
    res.render('about');
});

app.get("/weather",(req, res)=>{
    res.render('weather');
});

app.get("*",(req, res)=>{
    res.render('404error',{
        errorMSg: 'Opps Page Not Found / Go Back'
    });
});

app.listen(port,()=>{
 console.log(`lisen port is ${port}`);
});