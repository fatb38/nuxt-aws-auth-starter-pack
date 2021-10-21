import { CognitoUser } from 'amazon-cognito-identity-js'

export interface IUserAttributes {
  'given_name': string
  'picture': string
  'phone_number': string
  'family_name': string
  'email': string
}

export interface IUser extends CognitoUser {
  attributes: IUserAttributes
}
