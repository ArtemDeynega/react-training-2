import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

const styles = { form: { marginBottom: 20 } };

export const PokemonForm = ({ onSubmit }) => {
  const [pokemonName, setPokemonName] = useState(() => '');
  const handleNameChange = evt => {
    setPokemonName(evt.currentTarget.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (pokemonName.trim() === '') {
      toast.error('🦄  Введите имя покемона 🤪');
      return;
    }
    onSubmit(pokemonName);

    setPokemonName('');
  };
  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        name="pokemonName"
        value={pokemonName}
        onChange={handleNameChange}
      />
      <button type="submit">
        <ImSearch style={{ marginRigth: 8 }} />
        Найти
      </button>
    </form>
  );
};
