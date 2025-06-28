 
const fs = require("fs");

 fs.copyFile("hello.text" ,"./copy/copy.text" , function(err){
       if(err) console.log(err);
       else console.log("done");
})