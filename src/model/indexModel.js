const request = require('request')
module.exports = function (cb) {
  request({
    url: "http://localhost:1020/all",
    method: 'GET',
    headers:{
      'content-type': 'application/json',

    }
  },function (err,response,body) {
    var body = JSON.parse(body)
    cb(body)
  })
}
