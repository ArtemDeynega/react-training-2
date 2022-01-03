import style from './Dropdown.module.css';
import { Component } from 'react';

export class Dropdown extends Component {
  state = {
    visible: false,
  };
  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    const { visible } = this.state;
    return (
      <div className={style.Dropdown}>
        <button type="button" onClick={this.toggle}>
          {visible ? 'Скрыть' : 'Показать'}
        </button>
        {visible && (
          <div className={style.Dropdown__menu}>
            Выпадающее меню
          </div>
        )}
      </div>
    );
  }
}
