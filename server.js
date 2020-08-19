const express = require('express')
const app = express()

app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin','')
  res.header('Access-Control-Allow-Header','X-Requested-with,Content-Type')
  res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS')
  next()
})

app.get('/all',function (req, res) {
  var data = {
    all: '123',
    money: '123123'
  }
  res.send(JSON.stringify(data))
})

app.get('/shoplist',function (req, res) {
  var data = {
    shop: [
      { goodName: '飞机', price: 1000},
      { goodName: '电脑', price: 2000},
    ]
  }
  res.send(JSON.stringify(data))
})
console.log(1111)
app.listen(1020,function () {
  console.log('server start ...');
})
