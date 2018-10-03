import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../sagas'

export default (initialState = {}) => {
  const enhancers = []
  let composeEnhancers = compose

  if (process.env.NODE_ENV === 'development') {
    const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    if (typeof composeWithDevToolsExtension === 'function') {
      composeEnhancers = composeWithDevToolsExtension
    }
  }

  const sagaMiddleware = createSagaMiddleware()
  enhancers.push(applyMiddleware(sagaMiddleware))

  const store = createStore(rootReducer, initialState, composeEnhancers(...enhancers))

  sagaMiddleware.run(rootSaga, store.dispatch)

  return store
}
