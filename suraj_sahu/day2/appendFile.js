 
const fs = require("fs");

 fs.appendFile("hello.text" ,"and your name" , function(err){
       if(err) console.log(err);
       else console.log("done");
})