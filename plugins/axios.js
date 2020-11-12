import { Auth } from 'aws-amplify'

export default function ({ $axios }) {
  $axios.onRequest(async (config) => {
    config.headers = {
      ...config.headers,
      Authorization: `${(await Auth.currentSession()).getIdToken().getJwtToken()}`
    }
    return config
  })
}
