import React from 'react'
import {observable, autorun} from 'mobx'
import {observer, inject} from 'mobx-react'
import styles from './Header.module.scss'
import { InjectedProps } from '../../Interfaces & Types/Interfaces';

@inject('store')
@observer
class Header extends React.Component{

    @observable selectOptions = {currentOption: '', options:[{id: 1, value: 'cats'}, {id: 2, value: 'cards'}]}
    @observable option = ''

    get injected() {
        return this.props as InjectedProps
    }

    reaction = autorun(()=>{
        console.log(`select is`, this.option)
    }) 

    changeOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.option = 'yyyy'
        console.log( this.option)   
        
    }

    componentDidMount = () => {
        this.injected.store.getDataCats()
    }
    
    btnHandler = () => {
        console.log(this.injected.store.catsData[0].url)
    this.option = this.injected.store.catsData[0].url

}

    render(){
        return(
            <div className={styles.header}>
                <select onChange={this.changeOption}>
                    {/* {this.selectOptions&&this.selectOptions.options.map(opt=><option key={opt.id}>{opt.value}</option>)} */}
               <option value="">cards</option>
               <option>cats</option>
                </select>
                <button onClick={this.btnHandler}>click</button>
            </div>
        )
    }
}

export default Header