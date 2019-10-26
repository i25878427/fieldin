import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import immutableStateInvariant from 'redux-immutable-state-invariant'
import rootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const middleware = process.env.NODE_ENV !== 'production' ?
    [immutableStateInvariant(), sagaMiddleware] :
    [sagaMiddleware]


export const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
)

sagaMiddleware.run(rootSaga)
