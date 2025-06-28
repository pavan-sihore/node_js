const fs = require("fs");

 fs.rename("hello.txt" ,"hey.txt" , function(err){
       if(err) console.log(err);
       else console.log("done");
})