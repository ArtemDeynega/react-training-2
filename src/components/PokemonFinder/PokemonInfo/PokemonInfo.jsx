import { useState, useEffect } from 'react';

import { PokemonErrorViev } from '../PokemonErrorViev';
import { PokemonDataView } from '../PokemonDataView';
import { PokemonPendingView } from '../PokemonPendingView';

// ('idle');
// ('pending');
// ('resolved');
// ('rejected');
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
export const PokemonInfo = ({ pokemonName }) => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  useEffect(() => {
    if (!pokemonName) {
      return;
    }
    setStatus(Status.PENDING);

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(
          new Error(`Такого покемона ${pokemonName} не существует 😔`),
        );
      })
      .then(newPokemon => {
        setPokemon(newPokemon);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [pokemonName]);

  return (
    <>
      {status === Status.IDLE && <h2>Введите имя покемона</h2>}
      {status === Status.PENDING && (
        <PokemonPendingView pokemonName={pokemonName} />
      )}

      {status === Status.RESOLVED && <PokemonDataView pokemon={pokemon} />}
      {status === Status.REJECTED && (
        <PokemonErrorViev message={error.message} />
      )}
    </>
  );

  // componentDidUpdate(prevProps, prevState) {
  //   const prevName = prevProps.pokemonName;
  //   const currentName = this.props.pokemonName;

  //   if (prevName !== currentName) {
  //     this.setState({
  //       status: 'pending',
  //     });

  //     fetch(`https://pokeapi.co/api/v2/pokemon/${currentName}`)
  //       .then(res => {
  //         if (res.ok) {
  //           return res.json();
  //         }

  //         return Promise.reject(
  //           new Error(`Такого покемона ${currentName} не существует 😔`),
  //         );
  //       })
  //       .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
  //       .catch(error => this.setState({ error, status: 'rejected' }));
  //   }
  // }
};
