const express = require('express');
const bodyparser = require('body-parser')
const app = express()
app.use(bodyparser.urlencoded({extended:true}));
const port=3003

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/server.html')
  })
  app.post('/',(req,res)  =>{
    var weight = parseFloat(req.body.n1);
    var height = parseFloat(req.body.n2)/100;
    var bmi = weight / (height * height);
    res.send("Your BMI is:" + bmi.toFixed(2))
  })
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })