import React from "react";
import arrayMove from "array-move";
import { inject, observer } from "mobx-react";
import MyComponentInternal from "../cardList/CardList";
import { OnSortEnd, InjectedProps, ApiCardData } from "../../Interfaces & Types/Interfaces";
import styles from "./HomePage.module.scss";

@inject("store")
@observer
class HomePage extends React.Component {
  get injected() {
    return this.props as InjectedProps;
  }

  // функция для drag&drop
  onSortEnd = ({ oldIndex, newIndex }: OnSortEnd) => {
    this.injected.store.moveCards(arrayMove((this.injected.store.cardsData as ApiCardData[]), oldIndex, newIndex))
  };

  render() {
    return (
      <div className={styles.homePage}>
        <MyComponentInternal axis="xy" onSortEnd={this.onSortEnd} />
      </div>
    );
  }
}

export default HomePage;
