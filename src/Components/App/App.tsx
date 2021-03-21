import React from "react";
import HomePage from "../HomePage/HomePage";
import Header from "../Header/Header";
import styles from "./App.module.scss";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className={styles.container}>
          <HomePage />
        </div>
      </>
    );
  }
}

export default App;
