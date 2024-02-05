const express = require("express");
const app = express();



app.listen(4000,function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("listen:4000")
    }
});

app.get('*', function(req, res){
    res.status(200).send('ok')
})
