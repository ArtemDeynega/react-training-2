// import PaintingList from './components/PaintingList';
import FirstComponents from 'components/FirstComponents/FirstComponents';

// import paintings from './paintings.json';
// import Section from 'components/Section';
// import colorPikerOptions from './components/colorPikerOptions.json';
// import ColorPiker from 'components/ColorPiker';
// import Alert from 'components/Alert';

export default function App() {
  return (
    <div>
      <FirstComponents number={37}>See you to Thursdey</FirstComponents>
      <FirstComponents number={41}>See you in 2021</FirstComponents>
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
