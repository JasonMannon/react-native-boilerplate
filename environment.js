import { Constants } from 'expo'

const CONFIG = {
  test: {
    apiUrl: 'bar',
    webUrl: 'https://localhost:3001'
  },
  development: {
    foo: 'bar',
    webUrl: 'http://localhost:3001'
  },
  staging: {
    apiUrl: 'https://democrasales-api-staging.herokuapp.com',
    webUrl: 'http://democrasales-web-staging.herokuapp.com'
  },
  production: {
    apiUrl: 'https://democrasales-api-production.herokuapp.com',
    webUrl: 'http://www.democrasales.com'
  },

}

function env(env = '') {
  if (env === null || env === undefined || env === '') {
    const devEnv = require('./.env.js').default
    CONFIG.development = { ...devEnv, ...CONFIG.development }
    return CONFIG.development
  }
  if (env.indexOf('test') !== -1) return CONFIG.test
  if (env.indexOf('development') !== -1) return CONFIG.development
  if (env.indexOf('staging') !== -1) return CONFIG.staging
  if (env.indexOf('production') !== -1) return CONFIG.production
}

export const ENV = env(Constants.manifest.releaseChannel)
