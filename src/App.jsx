import React from 'react';
import { Counter } from './components/Counter';
import { Dropdown } from 'components/Dropdown';
import { ColorPicker } from 'components/ColorPiker';
import colorPikerOptions from './components/colorPikerOptions.json';
import { BasicTodo } from 'components/BasicTodo';

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
