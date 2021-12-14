import PropTypes from 'prop-types';

const TOPICS = ['react-scripts', 'react-components', 'jsx', 'js', 'module-css'];

export default function FirstComponents({ children, number }) {
  return (
    <>
      {number === 37 && <h3>Ето продит прямо сейчас</h3>}
      <h1>
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

FirstComponents.propTypes = {
  number: PropTypes.number.isRequired,
};
