const fs = require("fs");

fs.writeFile("hello.txt" ,"hey my name is suraj" , function(err){
       if(err) console.log(err);
       else console.log("done");
})

