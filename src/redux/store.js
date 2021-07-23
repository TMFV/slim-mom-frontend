import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST,
PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

/* ПРИМЕР ИМПОРТА РЕДЬЮСЕРОВ*/

import { usersReducer } from './users';
// import { someReducer } from './folderName';

const middleWare = [
  ...getDefaultMiddleware({
	serializableCheck: {
		ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
}}), logger];

const usersPersistConfig = {
  key: 'authToken',
  storage,
  whitelist: ['token'],
}

// const store = configureStore({
//   reducer: {
//     // foodOrDate: someReducer,
//     auth: persistReducer(usersPersistConfig, usersReducer)
//   },
//   middleWare,
//   devTools: process.env.NODE_ENV === "development",
// });

// const persistor = persistStore(store);

// eslint-disable-next-line
// export { store, persistor };