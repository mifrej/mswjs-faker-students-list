import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { storeReducer } from './store.reducer';
import rootSaga from './store.saga';
import { IStoreState } from './store.types';
import { composeWithDevTools } from 'redux-devtools-extension';

export const sagaMiddleware = createSagaMiddleware();

export const configureStore = (initialState = {}): Store<IStoreState> => {

    const middlewares = [sagaMiddleware];
    const enhancers = [applyMiddleware(...middlewares)];

    const store = createStore(
        storeReducer,
        initialState,
        composeWithDevTools(...enhancers),
    );

    sagaMiddleware.run(rootSaga);

    return store;
};
