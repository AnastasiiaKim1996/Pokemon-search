import React, { Component } from 'react';

import css from 'components/Container.module.css';

import { PokemonForm } from 'components/Form/PokemonForm';
import { PokemonInfo } from 'components/Info/PokemonInfo';

export class App extends Component {
  state = {
    name: '',
  };

  handleFormSubmit = name => {
    this.setState({ name });
  };

  render() {
    return (
      <div className={css.container}>
        <PokemonForm pokemon={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.name} />
      </div>
    );
  }
}
