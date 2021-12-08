import PaintingList from './components/PaintingList';

// import paintings from './paintings.json';
// import Section from 'components/Section';
// import colorPikerOptions from './components/colorPikerOptions.json';
// import ColorPiker from 'components/ColorPiker';
import Alert from 'components/Alert';

export default function App() {
  return (
    <div>
      {/* <ColorPiker options={colorPikerOptions} />
      <PaintingList items={paintings} /> */}

      <Alert text="Шеф все пропало" type="success" />
      <Alert text="Шеф все пропало" type="warning" />
      <Alert text="Шеф все пропало" type="error" />
      {/* <Section title="Топ недели">
        <PaintingList items={paintings} />
      </Section>
      <Section title="Лучшее">
        <PaintingList items={paintings} />
      </Section> */}
    </div>
  );
}
