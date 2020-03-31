const express =require('express');
const path=require('path');
const app=express();
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))
app.use('/',express.static(__dirname+'/public_html'));
app.listen(5000,()=>{
console.log("server running");
});