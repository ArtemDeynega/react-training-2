import React from 'react';
import { Component } from 'react';

// import PropTypes from 'prop-types';
// import { Counter } from './components/Counter';
// import { Dropdown } from 'components/Dropdown';
// import { ColorPicker } from 'components/ColorPiker';
// import colorPikerOptions from './components/colorPikerOptions.json';
// import { BasicTodo } from 'components/BasicTodo';
// import { Modal } from './components/BasicTodo/Modal';
// import { BasicRestApi } from 'components/BasicRestApi/BasicRestApi';
// import { NewCounter } from 'components/NewCounter';
import { PokemonFinder } from './components/PokemonFinder';

// import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <>
        <PokemonFinder />
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPikerOptions} /> */}
        {/* <BasicTodo /> */}

        {/* <BasicRestApi /> */}
      </>
    );
  }
}

export default App;
