module.exports = function (req,res) {
  // 调取这个页面的对应数据，然后结合模板
  var model = require("../../model/shoplistModel.js")
  model(function (result) {
    res.render('./shoplist.art',result)
  })
}
