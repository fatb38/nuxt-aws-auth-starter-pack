import { IUser } from '~/models/auth'

export interface AuthState {
  isAuthenticated: boolean
  user?: IUser
  pending: boolean
}

export interface RootState {
  auth: AuthState
}
