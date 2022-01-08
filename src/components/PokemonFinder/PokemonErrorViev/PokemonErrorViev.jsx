import errorImage from './../error.jpeg';

export const PokemonErrorViev = ({ message }) => {
  return (
    <div role="alert">
      <img src={errorImage} alt="sadcat" width="240" />
      <h2>{message}</h2>
    </div>
  );
};
