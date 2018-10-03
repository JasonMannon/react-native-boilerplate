import { all, takeLatest } from 'redux-saga/effects'
import API from '../services/api'

export default function * root (dispatch) {
  const api = API.create(dispatch)

  yield all([
  ])
}
