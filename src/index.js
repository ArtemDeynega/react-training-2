import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const imageUrl =
//   "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";

// const price = 10.99;

// const product = (
//   <>
//         <img src={imageUrl} alt="Tacos With Lime" width="640" />
//     <h2>Tacos With Lime</h2>
//     <p>Price: {price}</p>
//     <button type="button">Add to cart</button>
// </>

// );

// ReactDom.render(product, document.getElementById("root"));

// const Product = ({imgUrl,name,price}) => (
//   <div>
//     <img src={imgUrl} alt={name} width="640" />
//     <h2>{name}</h2>
//     <p>Price: {price}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// )

// const App = () => {
//   <div>
//     <h2>Best selling products</h2>
//     <Product
//     imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//       name="Tacos With Lime"
//       price={10.99}

//     />
//     <Product
//     imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//       name="Fries and Burger"
//       price={14.29}

//     />
//   </div>
// }

// Модуль 1  - 8.1. Свойство props.children

// const Profile = ({ name, email }) => {
//   <div>
//     <p>Name: { name}</p>
//     <p>Email: {email }</p>
//   </div>
// }
// const Panel = ({ title, children }) => {
//   <section>
//     <h2>{ title}</h2>
//     {children}
//   </section>
// }
// const App = () => {
//   <div>
//     <Panel title = "User profile">
//       <Profile name="Artem" email="artem.deynega89@gmail.com"/>
//     </Panel>
//   </div>
// }

// Модуль 1 - 8.2. Свойство defaultProps

const Product = ({ imgUrl, name, price }) => {
  <div>
    <img src={imgUrl} alt={name} width="640" />
    <h2>{name}</h2>
    <p>Price: {price}</p>
    <button type="button">Add to cart</button>
  </div>;
};
Product.defaultProps = {
  imgUrl:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
};
/*
 * Определение defaultProps гарантирует, что `props.imgUrl` будет иметь значение,
 * даже если оно не было указано при вызове компонента в родителе.
 */

Product.defaultProps = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

ReactDOM.render(
  <Product name="Tacos With Lime" price={10.99} />,
  document.getElementById('root')
);
