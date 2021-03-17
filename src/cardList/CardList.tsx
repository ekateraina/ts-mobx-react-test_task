import React from "react";
import {inject, observer} from "mobx-react";
import s from './CardList.module.css'
import {MyComponentProps,InjectedProps} from "../Interfaces/Interfaces";


@inject('cardStore')
@observer
class MyComponentInternal extends React.Component<MyComponentProps,{}> {
    get injected() {
        return this.props as InjectedProps
    }

    componentDidMount = () => {
        this.injected.cardStore.getDataCards()
    }

    render() {
        let cards = this.injected.cardStore.cardsData
        return (
            <div className={s.container}>
                {cards.length>1?cards.map(card=>{
                    return (
                        <div key={card.id} className={s.cardContainer}>
                            <h3>{card.title}</h3>
                            <p>{card.body}</p>
                        </div>
                    )
                }):<div className={s.loading}>Loading...</div>}
            </div>
        );
    }
}

export default MyComponentInternal