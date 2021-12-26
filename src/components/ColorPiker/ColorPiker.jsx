import './ColorPiker.css';
import { Component } from 'react';

export class ColorPicker extends Component {
  static defaultProps = {};
  state = {
    activeOptionsIdX: 0,
  };

  setActiveIndex = index => {
    this.setState({ activeOptionsIdX: index });
  };

  makeOptionsClassName = index => {
    const optionsClasses = ['ColorPickerOption'];
    if (index === this.state.activeOptionsIdX) {
      optionsClasses.push('ColorPickerOptionActive');
    }
    return optionsClasses.join(' ');
  };
  render() {
    const { activeOptionsIdX } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionsIdX];
    console.log(label);
    return (
      <div className="ColorPicker">
        <h2 className="ColorPickerTitle">Color Piker</h2>
        <p>Выбран цвет : {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionsClassName(index)}
              style={{
                backgroundColor: color,
              }}
              onClick={() => this.setActiveIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}
