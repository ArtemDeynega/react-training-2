import PropTypes from 'prop-types';
import s from './Painting.module.css';
import defaultImg from './default.jpeg';

export default function Painting({
  imageUrl = defaultImg,
  title,
  price,
  authorTag = 'Какой то автор',
  authorUrl,
  quantity,
}) {
  return (
    <div className={s.container}>
      <img src={imageUrl ?? defaultImg} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={authorUrl}>{authorTag}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {quantity < 10 ? `заканчивается` : `есть в наличии`} </p>
      <button type="button">Добавить в корзину</button>
    </div>
    // <div>
    //   <img src={url} alt={title} width="480" />
    //   <h2>{title}</h2>
    //   <p>
    //     Автор: <a href=""></a>
    //   </p>
    //   <p>Цена:{price} кредитов</p>
    //   <p>Доступность:{quantity < 5 ? `заканчивается` : `наличии`}</p>
    //   <button type="button">Добавить в корзину</button>
    // </div>
  );
}
Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  authorTag: PropTypes.string.isRequired,
  authorUrl: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
