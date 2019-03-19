// eslint-disable-next-line
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers";
import rootSaga from "../sagas";

const logger = (createLogger as any)();

const sagaMiddleware = createSagaMiddleware();

let middleware = applyMiddleware(logger, sagaMiddleware);

middleware = composeWithDevTools(middleware);

export default function configureStore() {
	const store = createStore(rootReducer, middleware);
	sagaMiddleware.run(rootSaga);
	return store;
}
