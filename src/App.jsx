import PaintingList from './components/PaintingList';

import paintings from './paintings.json';
import Section from './components/Section';

export default function App() {
  return (
    <div>
      {/* <PaintingList items={ paintings}/> */}
      <Section title="Топ недели">
        <PaintingList items={paintings} />
      </Section>
      <Section title="Лучшее">
        <PaintingList items={paintings} />
      </Section>
    </div>
  );
}
