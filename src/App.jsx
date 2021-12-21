// import PaintingList from './components/PaintingList';
// import { MyClassComponent } from 'components/MyClassComponent';
// import { Counter } from 'components/Counter';
// import { Input } from 'components/Input';
import { SignUpForm } from 'components/SignUpForm';
import { Btst } from 'components/Counter';
import { Toogle } from 'components/Toogle';
export default function App() {
  return (
    <div>
      <Toogle />
      {/* <MyClassComponent /> */}
      {/* <Counter value={1} /> */}
      <Btst />
      <SignUpForm />
      {/* <Input /> */}
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
