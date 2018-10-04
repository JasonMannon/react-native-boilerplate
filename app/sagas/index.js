import { all, takeLatest } from 'redux-saga/effects'
import API from '../services/api'

import { Types as UserTypes } from '../reducers/user'

import { signInUserRequest, createUserRequest } from '../sagas/userSagas'

export default function * root (dispatch) {
  const api = API.create(dispatch)

  yield all([
    takeLatest(UserTypes.CREATE_USER_REQUEST, createUserRequest, api),
    takeLatest(UserTypes.SIGN_IN_USER_REQUEST, signInUserRequest, api)
  ])
}
