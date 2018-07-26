import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore,applyMiddleware,combineReducers } from 'redux';
import { Provider } from 'react-redux'
import { searchRobots,requestRobot } from './reducers'
import { createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const logger=createLogger();



const rootReducer=combineReducers({searchRobots,requestRobot});
const store=createStore(rootReducer,applyMiddleware(logger,thunkMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
     document.getElementById('root')
    );
registerServiceWorker();
