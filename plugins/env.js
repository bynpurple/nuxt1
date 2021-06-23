const ENV = process.env.NODE_ENV
// const ENV = 'production'
console.log(process.env.NODE_ENV)

const NUXT = {
  development: 'http://amoled000.site:10001/api',
  testing: 'http://amoled000.site:10001/api',
  production: 'http://amoled000.site:10001/api'
}

export const NODE_ENV = ENV

export const ENV_NUXT = NUXT[ENV]
