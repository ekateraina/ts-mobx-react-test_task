import React from "react";
import {SortableContainer} from 'react-sortable-hoc';
import {inject, observer} from "mobx-react";
import {InjectedProps} from "../../Interfaces & Types/Interfaces";
import Card from '../Card/Card'
import s from './CardList.module.css'

@inject('store')
@observer
class MyComponent extends React.Component{
    get injected() {
        return this.props as InjectedProps
    }

      componentDidMount = () => {
        this.injected.store.getDataCards()
    }

    render() {
        let cards = this.injected.store.cardsData
        return (
            
            <div className={s.container}>
                {cards.length>1?cards.map((card,i)=>{
                    return (
                       <Card key={card.id} index={i} card={card}/>
                   )
                }):<div className={s.loading}>Loading...</div>}
            </div>
        );
    }
}

const MyComponentInternal = SortableContainer(MyComponent)

export default MyComponentInternal