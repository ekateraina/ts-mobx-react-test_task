import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import { inject, observer } from "mobx-react";
import { InjectedProps } from "../../Interfaces & Types/Interfaces";
import Card from "../Card/Card";
import s from "./CardList.module.css";

@inject("store")
@observer
class MyComponent extends React.Component {
  get injected() {
    return this.props as InjectedProps;
  }

  componentDidMount() {
    this.injected.store.getDataCards();
  }

  render() {
    const cards = this.injected.store.cardsData;
    const cats = this.injected.store.catsData;
    return (
      <div className={s.container}>
        {cards.length > 1 ? (
          cards.map((card, i) => {
            return <Card key={card.id} index={i} card={card} />;
          })
        ) : cats.length > 1 ? (
          cats.map((cat, i) => {
            return <Card key={cat.id} index={i} cat={cat} />;
          })
        ) : (
          <div className={s.loading}>Loading...</div>
        )}
      </div>
    );
  }
}

const MyComponentInternal = SortableContainer(MyComponent);

export default MyComponentInternal;
