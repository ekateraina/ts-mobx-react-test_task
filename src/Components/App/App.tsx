import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import Header from '../Header/Header'
import styles from './App.module.scss'

class App extends React.Component{

    render() {
        return (
            <Router>
            <Header />
            <div className={styles.container}>
                <HomePage />
            </div>
            </Router>
        );
    }
}

export default App

