import { Component } from 'react';
import { PokemonInfo } from './PokemonInfo';
import { PokemonForm } from './PokemonForm';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export class PokemonFinder extends Component {
  state = {
    pokemonName: '',
    // pokemon: null,
    // loading: false,
  };
  //   componentDidMount() {
  //     const { loading } = this.state;
  //     this.setState({ loading: !loading });
  //     setTimeout(() => {
  //       fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  //         .then(res => res.json())
  //         .then(pokemon => this.setState({ pokemon }))
  //         .finally(() =>
  //           this.setState(({ loading }) => ({
  //             loading: !loading,
  //           })),
  //         );
  //     }, 1000);
  //   }

  handleSearchFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };
  render() {
    const { pokemonName } = this.state;
    // const { pokemon, loading } = this.state;
    return (
      <>
        <div
          style={{
            maxWidth: 1170,
            margin: '0 auto',
            padding: 20,
          }}
        >
          <PokemonForm
            onSubmit={this.handleSearchFormSubmit}
          />
          <PokemonInfo pokemonName={pokemonName} />
          {/* <PokemonDataView pokemonName={pokemonName} /> */}
          {/* {loading && <h1>Loading...</h1>}
          {pokemon && <div>{pokemon.name}</div>} */}
          <ToastContainer autoClose={3000} />
        </div>
        {/* <PokemonInfo pokemonName={pokemonName} /> */}
      </>
    );
  }
}
