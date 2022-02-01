import { useState } from 'react';
import classNames from 'classnames';
import s from './ColorPiker.module.css';

/////////////////// Вариант с хуками
export const ColorPicker = ({ options }) => {
  const [activeOptionsIdX, setActiveOptionsIdX] = useState(0);

  const { label } = options[activeOptionsIdX];

  const makeOptionsClassName = index => {
    return index === activeOptionsIdX ? s.activeOption : s.option;
  };
  return (
    <div className={s.container}>
      <h2 className={s.title}>Color Piker</h2>
      <p>Выбран цвет : {label}</p>
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            className={makeOptionsClassName(index)}
            style={{
              backgroundColor: color,
            }}
            onClick={() => setActiveOptionsIdX(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

/////////Старый вариант без хуков
// export class ColorPicker extends PureComponent {
//   state = {
//     activeOptionsIdX: 0,
//   };
//   // shouldComponentUpdate(nextProps, nextState) {
//   //   return (
//   //     nextState.activeOptionsIdX !==
//   //     this.state.activeOptionsIdX
//   //   );
//   // }

//   setActiveIndex = index => {
//     this.setState({ activeOptionsIdX: index });
//   };

//   makeOptionsClassName = index => {
//     return classNames('ColorPickerOption', {
//       ' ColorPickerOptionActive':
//         index === this.state.activeOptionsIdX,
//     });

//     // const optionsClasses = ['ColorPickerOption'];
//     // if (index === this.state.activeOptionsIdX) {
//     //   optionsClasses.push('ColorPickerOptionActive');
//     // }
//     // return optionsClasses.join(' ');
//   };
//   render() {
//     console.log(`Re-render @ ${Date.now()}`);
//     const { activeOptionsIdX } = this.state;
//     const { options } = this.props;
//     const { label } = options[activeOptionsIdX];

//     // console.log(label);
//     return (

//     );
//   }
// }
