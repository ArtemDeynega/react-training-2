// import PaintingList from './components/PaintingList';
import Title from 'components/Title';
import { Button } from 'components/Button';
import { Slider } from './components/Slider';

// import paintings from './paintings.json';
// import Section from 'components/Section';
// import colorPikerOptions from './components/colorPikerOptions.json';
// import ColorPiker from 'components/ColorPiker';
// import Alert from 'components/Alert';

export default function App() {
  return (
    <div>
      <Title number={37}>See you to Thursdey</Title>
      <Slider />
      <Button primary>Learn React</Button>
      <Button>Don Not Learn Angular</Button>

      {/* <ColorPiker options={colorPikerOptions} />
      <PaintingList items={paintings} /> */}

      {/* <Alert text="Шеф все пропало" type="success" />
      <Alert text="Шеф все пропало" type="warning" />
      <Alert text="Шеф все пропало" type="error" /> */}
      {/* <Section title="Топ недели">
        <PaintingList items={paintings} />
      </Section>
      <Section title="Лучшее">
        <PaintingList items={paintings} />
      </Section> */}
    </div>
  );
}
