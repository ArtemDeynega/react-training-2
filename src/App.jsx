import React from 'react';
import { Counter } from './components/Counter';
import { Dropdown } from 'components/Dropdown';
import { ColorPicker } from 'components/ColorPiker';
import colorPikerOptions from './components/colorPikerOptions.json';

export default function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <Dropdown /> */}
      <ColorPicker options={colorPikerOptions} />
    </>
  );
}
