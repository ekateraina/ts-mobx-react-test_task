import React from "react";
import {Switch, Route} from 'react-router-dom'
import arrayMove from 'array-move'
import {inject, observer} from "mobx-react";
import MyComponentInternal from "../cardList/CardList";
import CardPage from '../CardPage/CardPage'
import { OnSortEnd, InjectedProps } from '../../Interfaces & Types/Interfaces';
import styles from './HomePage.module.scss'


@inject('store')
@observer
class HomePage extends React.Component{

    get injected() {
        return this.props as InjectedProps
    }

    onSortEnd = ({oldIndex, newIndex}:OnSortEnd)=>{
        this.injected.store.moveCards(arrayMove(this.injected.store.cardsData, oldIndex, newIndex))
        
      };
      
    render(){
        return(
            <div className={styles.homePage}>

            <MyComponentInternal axis='xy' onSortEnd={this.onSortEnd}/>

                <Switch>
                    <Route path='cards/:id'><CardPage /></Route>
                </Switch>
            </div>
        )
    }
}

export default HomePage