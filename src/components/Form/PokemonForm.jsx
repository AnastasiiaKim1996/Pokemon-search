import css from 'components/Form/PokemonForm.module.css';

import pokemon from 'components/Img/Pokemon.png';

import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ReactComponent as MyIcon } from 'components/Img/pokeball.svg';

export class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };

  nameId = nanoid();

  handleNameChange = e => {
    this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    // при сабміті форми викл метод з Арр і передаємо йому значення стейту pokemonName//

    this.props.pokemon(this.state.pokemonName);

    // this.props.onSubmit (this.state.pokemonName) //
    this.setState({ pokemonName: '' });
  };

  render() {
    const { nameId } = this;
    return (
      <div>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <img src={pokemon} alt="pikachu" width="100"></img>
          <label className={css.label} htmlFor={nameId}>
            Pokemon Name
          </label>
          <div className={css.inputWrapper}>
            <input
              className={css.input}
              type="text"
              id={nameId}
              name="PokemonName"
              value={this.state.pokemonName} // записуємо значення до стейту //
              onChange={this.handleNameChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
          <button
            style={{ width: 53, height: 53 }}
            className={css.btn}
            type="submit"
          >
            <MyIcon style={{ width: 50, height: 50 }} />
          </button>
        </form>
      </div>
    );
  }
}
