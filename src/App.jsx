import React from 'react';
import PropTypes from 'prop-types';
// import { Counter } from './components/Counter';
// import { Dropdown } from 'components/Dropdown';
import { ColorPicker } from 'components/ColorPiker';
import colorPikerOptions from './components/colorPikerOptions.json';
import { BasicTodo } from 'components/BasicTodo';
// import { NewCounter } from 'components/NewCounter';

// import { Component } from 'react';

export default function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <Dropdown /> */}
      {/* <ColorPicker options={colorPikerOptions} /> */}
      <BasicTodo />
    </>
  );
}
