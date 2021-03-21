import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import { inject, observer } from "mobx-react";
import { InjectedProps } from "../../Interfaces & Types/Interfaces";
import Card from "../Card/Card";
import s from "./CardList.module.scss";

@inject("store")
@observer
class MyComponent extends React.Component {
  get injected() {
    return this.props as InjectedProps;
  }

componentDidMount = () => {
  this.injected.store.changeSelectStatus('cards')
}

  render() {
    const cards = this.injected.store.cardsData;
    return (
      <div className={s.container}>
        {/* проверяем наличие массива карточек */}
    {cards.length?(cards as any[]).map((card,i:number)=>{
      // возвращаем card или cat в зависимости от содержимого
     return card.title?<Card key={card.id} index={i} card={card} /> :
      <Card key={card.id} index={i} cat={card} />
    }):<div className={s.loading}>Loading...</div>}
        
      </div>
    );
  }
}

const MyComponentInternal = SortableContainer(MyComponent);

export default MyComponentInternal;
