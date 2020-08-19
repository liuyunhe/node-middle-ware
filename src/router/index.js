// 控制器层

const express = require('express')
let router = express.Router()
let index = require('./controll/index.js')
let shoplist = require('./controll/shoplist.js')
router.get('/',index)
router.get('/shoplist',shoplist)
module.exports = router
