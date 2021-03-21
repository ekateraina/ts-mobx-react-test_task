import React from "react";
import { observer, inject } from "mobx-react";
import Select from 'react-select'
import styles from "./Header.module.scss";
import { InjectedProps } from "../../Interfaces & Types/Interfaces";
import {OptionType} from '../../Interfaces & Types/Types'


@inject("store")
@observer
class Header extends React.Component {
  get injected() {
    return this.props as InjectedProps;
  }

  changeOption = (selectedOption: OptionType) => {
    if(selectedOption !== null){
      const value = selectedOption.value
      this.injected.store.changeSelectStatus(value);
    }
  };

  render() {
    const options = this.injected.store.selectStatus.options;
    return (
      <div className={styles.header}>
        <h3>Change cards</h3>
        <Select defaultValue={options[1]} options={options} onChange={(selectedOption=>this.changeOption(selectedOption))} />
      </div>
    );
  }
}

export default Header;
