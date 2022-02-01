import { useContext } from 'react';
import { TitleContext } from './context/Title';

export const Legend = () => {
  const { title } = useContext(TitleContext);

  return <div>Legend: {title}</div>;
};
