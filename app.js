// MVC:缺点： 1.前后端不分离没有专业的人做专业的事。
// 2.后端服务无法多端调用-不是api,直接是从数据库里拿的，app

// MVVM缺点：1.浏览器负担太重，vue/react对比mvc往往内存占用比较大。
// 2.没有HTML结构，没有SEO性能。
// 3》首屏加载过慢

// node的特性：1.计算性能（CPU）慢。2.高并发性能（高并发文件读取）
// express 是node最早期的一批框架 =》中间件的概念 - 大而全（模板引擎，路由）
// koa和express十分相似 =》 中间件 -（剔除了很多功能，自由度高）
// express-先定义先执行
// koa-后定义先执行（洋葱层模型）
// egg - 企业级框架-重

// app.use(()=>{
//   console.log(1)   express先执行
// })
//
// app.use(()=>{
//   console.log(2)   koa先执行
// })

// 视图模板
// <template>
//   <div>{{ data }}</div>
// </template>

// pug
//   <div>
//     <p></p>
//   </div>

// div
//  p

// EJS(太大而全，写起来有点费劲)
// <div><%=data%></div>

// art-template -极致的性能-写法比较适合前端-功能没ejs全-底层是ejs

const express = require('express')
const app = express()
const router = require('./src/router')

// radis缓存
global.caches = {}
// 设置模板
app.engine("art", require('express-art-template'))
app.set('views','./src/views')
app.use('/',router)
app.listen(3500,function () {
  console.log('server start ...');
})

// a,b,c,d  负载均衡，分担请求    
