import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import HomePage from '../HomePage/HomePage'

class App extends React.Component{

    render() {
        return (
            <Router>
            <div className={'container'}>
                <HomePage />
            </div>
            </Router>
        );
    }
}

export default App

