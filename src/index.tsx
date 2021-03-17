import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {cardStore} from '../src/mobX/store'
import {Provider} from "mobx-react";

ReactDOM.render(
    <Provider cardStore={cardStore}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

