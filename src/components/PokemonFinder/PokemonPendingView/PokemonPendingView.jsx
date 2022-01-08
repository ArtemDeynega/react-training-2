import s from './PokemonPendingView.module.css';
import { ImSpinner9 } from 'react-icons/im';
import pendingImg from '../pending.png';
import { PokemonDataView } from '../PokemonDataView';

export const PokemonPendingView = ({ pokemonName }) => {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImg,
        },
      },
    },
    stats: [],
  };

  return (
    <div role="alert">
      <div className={s.Spinner}>
        <ImSpinner9
          size="32"
          className={s.IconSpin}
          color="black"
        />
        <h3>Ищем покемона {pokemon.name} 🤓</h3>
      </div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
};
