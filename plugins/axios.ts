import { Auth } from 'aws-amplify'
import { Context } from '@nuxt/types'

export default function ({ $axios }: Context) {
  $axios.onRequest(async (config) => {
    config.headers = {
      ...config.headers,
      Authorization: `${(await Auth.currentSession()).getIdToken().getJwtToken()}`
    }
    return config
  })
}
