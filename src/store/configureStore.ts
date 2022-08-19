import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { createLogger, LogEntryObject } from "redux-logger";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import createRootReducer from "./rootReducers";

/** add middlewares */
const middlewares: any = [];

// middleware redux-thunk
middlewares.push(thunk);

// middleware redux logger
if (import.meta.env.MODE === "development") {
  const logger = createLogger({
    diff: true,
    predicate: (_getState, action) => action.type !== "tradeSlice/setTimeTick",
    collapsed: (
      _getState: any,
      _action: any,
      logEntry: LogEntryObject | undefined
    ) => !logEntry?.error,
  });
  middlewares.push(logger);
}

const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === "auth/logOut") {
    state = {};
  }
  return createRootReducer(state, action);
};

/** config redux-persist */
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

/** create redux store */
const store = configureStore({
  devTools: import.meta.env.MODE !== "production",
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middlewares),
});

const persistor = persistStore(store);

export { store, persistor };

export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
