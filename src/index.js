import React from 'react';
import ReactDOM from 'react-dom';


import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import App from './components/app';
import requireAuth from './components/require-auth';
import Resources from './components/resources';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path='/' component={App} />
                <Route exact path='/resources' component={requireAuth(Resources)} />
            </div>
        </BrowserRouter>
    </Provider>

    , document.getElementById('root'));
registerServiceWorker();
