import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

// // static import
import rootSaga from "./saga";
import { authReducer, repoReducer } from "./reducers";

// setup saga middleware
const sagaMiddleware = createSagaMiddleware();

// create root reducer
const rootReducer = {
  repo: repoReducer,
  auth: authReducer,
};

// setup store
const Store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);
export default Store;
