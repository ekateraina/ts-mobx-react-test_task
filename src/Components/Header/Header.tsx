import React from "react";
import { action } from "mobx";
import { observer, inject } from "mobx-react";
import styles from "./Header.module.scss";
import { InjectedProps } from "../../Interfaces & Types/Interfaces";

@inject("store")
@observer
class Header extends React.Component {

  get injected() {
    return this.props as InjectedProps;
  }

  @action changeOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.injected.store.changeSelectStatus(event.target.value)
  };

  render() {
    const options = this.injected.store.selectStatus.options;
    return (
      <div className={styles.header}>
        <h3>Change cards</h3>
        <select onChange={(event)=>this.changeOption(event)} defaultValue={options[1].value}>
          {options &&
            options.map((opt) => <option key={opt.id}>{opt.value}</option>)}
        </select>
      </div>
    );
  }
}

export default Header;
