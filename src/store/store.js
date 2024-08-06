import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import reducer from './reducer';

const persistConfig = {
  key: 'root',
  storage,
  // Optionally, you can blacklist or whitelist specific reducers
  // blacklist: ['reducerToIgnore'],
  // whitelist: ['reducerToPersist'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
