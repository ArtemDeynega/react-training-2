import './ColorPiker.css';
import { PureComponent } from 'react';
import classNames from 'classnames';

export class ColorPicker extends PureComponent {
  state = {
    activeOptionsIdX: 0,
  };
  // shouldComponentUpdate(nextProps, nextState) {
  //   return (
  //     nextState.activeOptionsIdX !==
  //     this.state.activeOptionsIdX
  //   );
  // }

  setActiveIndex = index => {
    this.setState({ activeOptionsIdX: index });
  };

  makeOptionsClassName = index => {
    return classNames('ColorPickerOption', {
      ' ColorPickerOptionActive':
        index === this.state.activeOptionsIdX,
    });

    // const optionsClasses = ['ColorPickerOption'];
    // if (index === this.state.activeOptionsIdX) {
    //   optionsClasses.push('ColorPickerOptionActive');
    // }
    // return optionsClasses.join(' ');
  };
  render() {
    console.log(`Re-render @ ${Date.now()}`);
    const { activeOptionsIdX } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionsIdX];

    // console.log(label);
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
