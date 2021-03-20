import React from "react";
import arrayMove from "array-move";
import { inject, observer } from "mobx-react";
import { action } from "mobx";
import MyComponentInternal from "../cardList/CardList";
import { OnSortEnd, InjectedProps } from "../../Interfaces & Types/Interfaces";
import styles from "./HomePage.module.scss";

@inject("store")
@observer
class HomePage extends React.Component {
  get injected() {
    return this.props as InjectedProps;
  }

  @action onSortEnd = ({ oldIndex, newIndex }: OnSortEnd) => {
    this.injected.store.cardsData.length > 0
      ? this.injected.store.moveCards(
          arrayMove(this.injected.store.cardsData, oldIndex, newIndex)
        )
      : this.injected.store.moveCats(
          arrayMove(this.injected.store.catsData, oldIndex, newIndex)
        );
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
