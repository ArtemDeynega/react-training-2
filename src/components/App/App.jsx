import React from 'react';
import { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
// import { SignupForm } from 'components/HooksModule/SignupForm/';
// import { AppBar } from '../HooksModule/AppBar';
// import { ColorPicker } from 'components/ColorPiker';
// import { Counter } from 'components/Counter';
// import { Friends } from 'components/Friends/';
// import { Clock } from 'components/BasicTodo/Clock';
// import s from './App.module.css';

// import PropTypes from 'prop-types';
// import { Counter } from './components/Counter';
// import { Dropdown } from 'components/Dropdown';
// import { ColorPicker } from 'components/ColorPiker';
// import colorPikerOptions from '../colorPikerOptions.json';
// import { BasicTodo } from 'components/BasicTodo';
// import { Modal } from './components/BasicTodo/Modal';
// import { BasicRestApi } from 'components/BasicRestApi/BasicRestApi';
// import { NewCounter } from 'components/NewCounter';
// import { TitleContext } from 'components/Counter/context/Title';
// import { PokemonFinder } from '../PokemonFinder';
import { AppRouting } from 'components/Routing';

// import { Component } from 'react';

class App extends Component {
  // state = {
  //   appTitle: 'React 37!',
  //   open: false,
  // };
  // handleInputChange = evt => {
  //   this.setState({ appTitle: evt.target.value });
  // };
  // onTitleUpdate = () => {};
  render() {
    return (
      <AppRouting />

      // <Friends />
      // <Counter />
      // <PokemonFinder />
      // <TitleContext.Provider
      //   value={{ title: this.state.appTitle }}
      // >
      //   <div className={s.app}>      //     <div>
      //       <input
      //         type="shange"
      //         value={this.state.appTitle}
      //         onChange={this.handleInputChange}
      //       />
      //     </div>
      //     <NewCounter
      //       title={this.state.appTitle}
      //       onTitleUpdate={() =>
      //         this.setState({ appTitle: 'React 37!' })
      //       }
      //     />
      //   {/* <Counter
      //   arrProp={['Good', 'Neutral', 'Bad']}
      //   title={this.state.appTitle}
      //   onTitleUpdate
      // /> */}
      //   {/* <SignupForm /> */}
      //   {/* <ColorPicker options={colorPikerOptions} /> */}
      //   {/* <Counter /> */}
      //   {/* <Clock /> */}
      //     </div>
      //   </TitleContext.Provider>
      // );
    );
  }
}

export default App;
