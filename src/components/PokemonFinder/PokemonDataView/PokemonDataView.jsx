import s from './PokemonDataView.module.css';

export const PokemonDataView = ({
  pokemon: { sprites, name, stats },
}) => {
  return (
    <div>
      <h1>Pokemon Info</h1>

      <img
        src={
          sprites.other['official-artwork'].front_default
        }
        alt={name}
        width={240}
      />
      <h2>{name}</h2>
      <ul>
        {stats.map(entry => (
          <li key={entry.stat.name} className={s.ListItem}>
            {entry.stat.name}: {entry.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
};
