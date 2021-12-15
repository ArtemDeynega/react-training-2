// import PaintingList from './components/PaintingList';
import { MyClassComponent } from 'components/MyClassComponent';
import { Counter } from 'components/Counter';
export default function App() {
  return (
    <div>
      <MyClassComponent />
      <Counter step={3} prob="это prob" />
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
