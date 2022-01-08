import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

const styles = { form: { marginBottom: 20 } };

export class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };
  handleNameChange = evt => {
    this.setState({
      pokemonName: evt.currentTarget.value.toLowerCase(),
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    // eslint-disable-next-line no-lone-blocks
    {
      this.state.pokemonName.trim() === ''
        ? toast.error('🦄  Введите имя покемона 🤪')
        : this.props.onSubmit(this.state.pokemonName);
    }

    this.setState({ pokemonName: '' });
  };
  render() {
    const { pokemonName } = this.state;
    return (
      <form
        onSubmit={this.handleSubmit}
        style={styles.form}
      >
        <input
          type="text"
          name="pokemonName"
          value={pokemonName}
          onChange={this.handleNameChange}
        />
        <button type="submit">
          <ImSearch style={{ marginRight: 8 }} /> Найти
        </button>
      </form>
    );
  }
}
