const env = {
  dev: {
    cdn: './',
    apiBaseUrl: '/api' // 开发环境接口请求，后用于 proxy 代理配置
  },
  test: {
    cdn: '//a.xxx.com/vite-react-app/test', // 测试环境 cdn 路径
    apiBaseUrl: '//www.beta.xxx.com/v1' // 测试环境接口地址
  },
  prod: {
    cdn: '//a.xxx.com/vite-react-app/release', // 正式环境 cdn 路径
    apiBaseUrl: '//www.xxx.com/v1' // 正式环境接口地址
  }
}

const common = {

}

const config = {...common, ...env[import.meta.env.MODE]}

console.log('mode', import.meta.env.MODE)
console.log('config', config)

export default config