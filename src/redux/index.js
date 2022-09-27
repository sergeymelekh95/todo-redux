//Создание Store
import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import { rootReducer } from './reducers';
import { loadState, saveState } from './localStorage';

export const configureStore = () => {
    const persistedState = loadState();

    const store = createStore(
        rootReducer,
        persistedState,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    store.subscribe(throttle(() => {
        saveState({
            todosReducer: store.getState().todosReducer,
        });
    }, 1000));

    return store;
};
