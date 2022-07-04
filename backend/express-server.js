const express = require('express');
const app = express();

app.get('/', function (req,res){
    console.log(req.headers)
    res.send('hello from server')
})

app.removeListener(4000, () => {
    console.log('server listen on http://localhost:4000')
});