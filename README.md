# Nuxt with AWS Authentication starter pack
![NUXT AWS AMPLIFY](static/nuxt-amplify.png)

## Description
This is a [Nuxt JS](https://nuxtjs.org/) app template with [Amazon Cognito](https://aws.amazon.com/cognito/) Authentication.  
It provides a complete Auth workflow with Sign In, Sign Up, Reset or Change Password.  
It uses [AWS Amplify](https://docs.amplify.aws/) library for all auth actions.

## Installation
```bash
# clone or download the project
$ git clone https://github.com/fatb38/nuxt-aws-auth-starter-pack.git

# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```

## Getting Started
 App authentication required AWS credentials. They are set into environment variables in the `nuxt.config.js` file :
 
```javascript
env: {
    IDENTITY_POOL_ID: process.env.IDENTITY_POOL_ID,
    REGION: process.env.REGION,
    USER_POOL_ID: process.env.USER_POOL_ID,
    USER_POOL_WEB_CLIENT_ID: process.env.USER_POOL_WEB_CLIENT_ID,
    ACCESS_KEY_ID: process.env.ACCESS_KEY_ID,
    SECRET_ACCESS_KEY: process.env.SECRET_ACCESS_KEY
  }
```
Create a local `.env` file into the root folder and simply add your secrets.  
Now you can log in with your AWS username / password.

## Usage
All Amplify auth methods are available in Vue store actions into `store/auth.js`.  
You can use it globally into the app with `$store.dispatch` or `mapActions` (see [Vuex guide](https://vuex.vuejs.org/fr/guide/actions.html) for store usage)  
All methods are asynchronous and return the Amplify response object.

Here is the login example :
```javascript
// into store auth.js
async login ({ commit }, { username, password }) {
  const user = await Auth.signIn(username, password)
  commit('set', user)
  return user
}

// usage into login.vue component
methods: {
...mapActions('auth', ['login']),

    async performLogin () {
    this.pending = true
    try {
      await this.login(this.credentials)
      this.$router.push('/')
    } catch ({ message }) {
      console.error(message)
    } finally {
      this.pending = false
    }
  }
}
```

... in progress
