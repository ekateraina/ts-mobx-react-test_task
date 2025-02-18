import React from "react";
import { inject, observer } from "mobx-react";
import { SortableElement } from "react-sortable-hoc";
import { cardProps } from "../../Interfaces & Types/Types";
import styles from "./Card.module.scss";

@inject("store")
@observer
class SortableComponent extends React.Component<cardProps> {
  render() {
    const {card, cat} = this.props;

    // в зависимости от содержимого props возвращаем card или cat
    return card ? (
      <div className={styles.cardContainer}>
        <h3>{card.title}</h3>
        <p>{card.body}</p>
      </div>
    ) : cat ? (
      <div className={styles.catContainer}>
        <img src={cat.url} alt="cat" />
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}

const Card = SortableElement(SortableComponent);
export default Card;
