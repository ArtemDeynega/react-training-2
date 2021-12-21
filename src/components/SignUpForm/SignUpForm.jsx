import { Component } from 'react';
import shortid from 'shortid';

// /*
//  * Выносим объект с примитивами в константу чтобы было удобно сбрасывать.
//  * Нельзя использовать если в каком-то свойстве состояния хранится сложный тип.
//  */

// const INITIAL_STATE = {
//   login: '',
//   email: '',
//   password: '',
// };

// export class SignUpForm extends Component {
//   state = {
//     ...INITIAL_STATE,
//   };
//   loginInputId = shortid.generate();
//   /*
//    * Для всех инпутов создаем один обарботчик
//    * Различать инпуты будем по атрибуту name
//    */
//   /*
//    * Отвечает за обновление состояния
//    */

//   handleChange = ({ target }) => {
//     const { name, value } = target;
//     this.setState({ [name]: value });
//   };
//   /*
//    * Вызывается при отправке формы
//    */
//   handleSubmit = e => {
//     e.preventDefault();
//     const { login, email, password } = this.state;
//     console.log(
//       `Login : ${login}
//         Email : ${email}
//         Password : ${password}
//         `,
//     );
//     // Проп который передается форме для вызова при сабмите
//     this.props.onSubmit({ ...this.state });
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ ...INITIAL_STATE });
//   };
//   render() {
//     const { login, email, password } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label htmlFor={this.loginInputId}>
//           Name
//           <input
//             type="text"
//             placeholder="Enter login"
//             name="login"
//             value={login}
//             onChange={this.handleChange}
//             id={this.loginInputId}
//           />
//         </label>
//         <label htmlFor={this.loginInputId}>
//           Email
//           <input
//             type="email"
//             placeholder="Enter email"
//             name="email"
//             value={email}
//             onChange={this.handleChange}
//             id={this.loginInputId}
//           />
//         </label>
//         <label htmlFor={this.loginInputId}>
//           Password
//           <input
//             type="password"
//             placeholder="Enter password"
//             name="password"
//             value={password}
//             onChange={this.handleChange}
//             id={this.loginInputId}
//           />
//         </label>
//         <button type="submit">Sign up as {login}</button>
//       </form>
//     );
//   }
// }

//==================  4. Чекбоксы
const Gender = {
  MALE: 'male',
  FEMALE: 'female',
};
const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
  agreed: false,
  gender: null,
  age: '',
};
export class SignUpForm extends Component {
  state = {
    ...INITIAL_STATE,
  };
  handleChange = ({ target }) => {
    const { name, value, type, cheked } = target;
    // Если тип элемента checkbox, берем значение checked,
    // в противном случае value
    this.setState({
      [name]: type === 'checkbox' ? cheked : value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { login, password, email, agreed } = this.state;

    console.log(
      ` Login: ${login}  
      Email: ${email}  
      Password: ${password}  
      Agreed: ${agreed} `,
    );
  };
  render() {
    const { login, password, email, agreed, gender, age } =
      this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <section>
          <h2>Выбери свой пол</h2>
          <label>
            Male
            <input
              type="radio"
              checked={gender === Gender.MALE}
              name="gender"
              value={Gender.MALE}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              checked={gender === Gender.FEMALE}
              name="gender"
              value={Gender.FEMALE}
              onChange={this.handleChange}
            />
          </label>
        </section>
        <section>
          <label>
            Выбери свой возраст
            <select
              name="age"
              value={age}
              onChange={this.handleChange}
            >
              <option value="" disabled></option>
              <option value="18-25">18-25</option>
              <option value="26-35">26-35</option>
              <option value="36+">36+</option>
            </select>
          </label>

          <button type="submit" disabled={!agreed}>
            Sign up as {login}
          </button>
        </section>
        <label>
          {' '}
          Agree to textTransform
          <input
            type="checkbox"
            checked={agreed}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" disabled={!agreed}>
          Sign up as {login}
        </button>
      </form>
    );
  }
}
