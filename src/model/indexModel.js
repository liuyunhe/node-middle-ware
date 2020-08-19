  // 模型层

const request = require('request')
module.exports = function (cb) {
  // radis缓存
  if(caches.index){  
    cb(caches.index)
  }else{
    request({
      url: "http://localhost:1020/all",
      method: 'GET',
      headers:{
        'content-type': 'application/json',
  
      }
    },function (err,response,body) {
      var body = JSON.parse(body)
      caches.index = body
      cb(body)
    })
  }

}

// tcp 链接
// tcpClient-api服务端开tcp服务
// tcpClient.on('data',() => {
//   caches = {}
// })

// 服务端渲染（ssr）是把浏览器执行的js放到服务器上执行
// ssr => 没有MVVM框架原生式体验（切换页面要重新加载）=> 重交互的网站不做ssr比较好
// 面向市场的网站绝对需要ssr（seo）=> 传统Vue/React没有seo性能（只会收录首页）


// 中间层,工程化(自动化,自动化部署,前端灰度发布,ci/cd)
// 项目 => 组件库设计 => 通用库设计