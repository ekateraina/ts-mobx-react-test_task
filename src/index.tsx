import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import {cardStore} from './mobX/store'
import {Provider} from "mobx-react";

ReactDOM.render(
    <Provider cardStore={cardStore}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

