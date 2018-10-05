import { call, put } from 'redux-saga/effects'
import Actions from '../reducers/user'

export function* createUserRequest (api, { email, nickname, password, passwordConfirmation }) {
  const response = yield call(api.createUser, email, nickname, password, passwordConfirmation)

  if (response.ok) {
    const { data: { data: user } } = response
    const { headers: { 'access-token': accessToken, client } } = response
    const userData = { nickname: user.nickname, uid: user.uid, email: user.email, accessToken: accessToken, client: client }

    yield put(Actions.createUserSuccess(userData))
  } else {
    const { full_messages } = response.data.errors

    yield put(Actions.createUserError(full_messages.join(', ')))
  }
}

export function* signInUserRequest (api, { email, password }) {
  const response = yield call(api.signInUser, email, password)

  if (response.ok) {
    const { data: { data: user } } = response
    const { headers: { 'access-token': accessToken, client } } = response
    const userData = { nickname: user.nickname, uid: user.uid, email: user.email, accessToken: accessToken, client: client }

    yield put (Actions.signInUserSuccess(userData))
  } else {
    const { errors } = response.data
    const errorMessage = errors.join(', ')

    yield put(Actions.signInUserError(errorMessage))
  }
}

export function* signOutUserRequest (api) {
  const response = yield call(api.signOutUser)

  if (response.ok) {
    yield put(Actions.signOutUserSuccess())
  }
}
