import MyComponentInternal from "./cardList/CardList";
import React from "react";

class App extends React.Component {
    render() {
        return (
            <div className={'container'}>
                <MyComponentInternal/>
            </div>
        );
    }
}

export default App

