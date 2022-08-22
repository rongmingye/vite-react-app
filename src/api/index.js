const files = require.context('./', true, /\.js$/)

  let apis = {}
  files.keys().forEach(key => {
      if (key === './index.js') return //    如果是当前文件，则跳过

      apis = Object.assign(apis, files(key).default ) // 读取出文件中的default模块
  })
  
  export default apis 
