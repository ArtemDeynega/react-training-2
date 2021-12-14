import PropTypes from 'prop-types';
import style from './Title.module.scss';
import classNames from 'classnames';

const TOPICS = ['react-scripts', 'react-components', 'jsx', 'js', 'module-css'];

function Title({ children, number, error }) {
  return (
    <>
      {number === 37 && <h3>Ето продит прямо сейчас</h3>}
      <h1
        className={classNames(style.Title, { [style['Title--error']]: error })}
      >
        {children} React {number}
      </h1>
      <ul>
        {TOPICS.map(el => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </>
  );
}

export default Title;

Title.propTypes = {
  number: PropTypes.number.isRequired,
};
