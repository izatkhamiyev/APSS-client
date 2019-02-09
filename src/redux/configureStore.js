import { Articles } from './Articles';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            articles: Articles
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}