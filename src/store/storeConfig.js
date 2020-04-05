import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { AsyncStorage } from 'react-native'
import { persistStore, persistReducer } from 'redux-persist'

import rootReducer from '../reducers'
import promise from './promise'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, compose(applyMiddleware(thunk, promise)))
const persistor = persistStore(store)

export default { store, persistor }