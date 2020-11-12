import Amplify from 'aws-amplify'
import AWS from 'aws-sdk'

AWS.config.update({
  region: process.env.REGION,
  credentials: new AWS.Credentials(process.env.ACCESS_KEY_ID, process.env.SECRET_ACCESS_KEY)
})

Amplify.configure({
  // REQUIRED - Amazon Cognito Identity Pool ID
  identityPoolId: process.env.IDENTITY_POOL_ID,
  // REQUIRED - Amazon Cognito Region
  region: process.env.REGION,
  // OPTIONAL - Amazon Cognito User Pool ID
  userPoolId: process.env.USER_POOL_ID,
  // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
  userPoolWebClientId: process.env.USER_POOL_WEB_CLIENT_ID
})
