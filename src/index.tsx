import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "mobx-react";
import App from './Components/App/App';
import {store} from './mobX/store'

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

