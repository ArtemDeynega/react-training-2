import { Component } from 'react';

import { PokemonErrorViev } from '../PokemonErrorViev';
import { PokemonDataView } from '../PokemonDataView';
import { PokemonPendingView } from '../PokemonPendingView';

// ('idle');
// ('pending');
// ('resolved');
// ('rejected');

export class PokemonInfo extends Component {
  state = {
    pokemon: null,

    error: null,
    status: 'idle',
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const currentName = this.props.pokemonName;

    if (prevName !== currentName) {
      this.setState({
        status: 'pending',
      });

      fetch(
        `https://pokeapi.co/api/v2/pokemon/${currentName}`,
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          }

          return Promise.reject(
            new Error(
              `Такого покемона ${currentName} не существует 😔`,
            ),
          );
        })
        .then(pokemon =>
          this.setState({ pokemon, status: 'resolved' }),
        )
        .catch(error =>
          this.setState({ error, status: 'rejected' }),
        );

      // this.setState({ });
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    if (status === 'idle') {
      return <h2>Введите имя покемона</h2>;
    }
    if (status === 'pending') {
      return (
        <PokemonPendingView pokemonName={pokemonName} />
      );
    }
    if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemon} />;
    }

    if (status === 'rejected') {
      return <PokemonErrorViev message={error.message} />;
    }
    //  return (
    //     <>
    //       {/* {error && <h2>{error.message}</h2>} */}
    //       {/* {loading && <h1>Загружаем...</h1>} */}
    //       {/* {!pokemonName && <h2>Введите имя покемона</h2>} */}
    //       {/*  {pokemon && (
    //           <div>
    //             <h1>Pokemon Info</h1>
    //             <p>{pokemon.name}</p>
    //             <img
    //               src={
    //                 pokemon.sprites.other['official-artwork']
    //                   .front_default
    //               }
    //               alt={pokemon.name}
    //               width={240}
    //             />
    //           </div>
    //         )} */}
    //     </>
    //   );
  }
}
