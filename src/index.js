import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './HOC/Context/Auth-Context';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducers from './HOC/Store/Reducer';
import 'bootstrap/dist/css/bootstrap.min.css';

const globalStore = createStore(reducers);


const app = <BrowserRouter>
    <Provider store={globalStore}>
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
    </Provider>
</BrowserRouter>;

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
