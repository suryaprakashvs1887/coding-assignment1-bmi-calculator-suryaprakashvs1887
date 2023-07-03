const express = require('express');
const bodyparser = require('body-parser')
const app = express()
app.use(bodyparser.urlencoded({extended:true}));
const port=3003

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/server.html')
  })
  app.post('/',(req,res)  =>{
    var weight = Number(req.body.n1);
    var height = Number(req.body.n2);
    var bmi = weight / (height * height);
    res.send("Your BMI is:" + bmi)
  })
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })