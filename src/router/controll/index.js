module.exports = function (req,res) {
  // 调取这个页面的对应数据，然后结合模板
  var model = require("../../model/indexModel.js")
  model(function (result) {
    // result => {all: 111111, money: 111111}
    res.render('./index.art',result)
  })
}
