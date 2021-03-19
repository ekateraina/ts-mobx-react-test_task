import React from 'react'
import {SortableElement} from 'react-sortable-hoc';
import {Link} from 'react-router-dom';
import styles from './Card.module.scss'
import { Props } from '../../Interfaces & Types/Types';

class SortableComponent extends React.Component<Props>{

render(){

    let card = this.props.card
    return(
        <Link to={`/cards/${card.id}`}><div className={styles.cardContainer}>
                            <h3>{card.title}</h3>
                            <p>{card.body}</p>
                        </div>
                        </Link>
    )
}
}

const Card = SortableElement(SortableComponent) 
export default Card