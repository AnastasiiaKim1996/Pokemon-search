import React, { Component } from 'react';

import { PokemonErrorView } from 'components/PokemonView/PokemonErrorView';
import { PokemonDataView } from 'components/PokemonView/PokemonDataView';
import { PokemonPendingView } from 'components/PokemonView/PokemonPendingView';
import css from 'components/PokemonView/PokemonData.module.css';

export class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: 'idle',
  };
  // методи життєвого циклу //

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      console.log('Name of pokemon change');
      this.setState({ status: 'pending' });

      setTimeout(() => {
        fetch(`https:pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            return Promise.reject(
              new Error(`Pokemon with name ${this.props.pokemonName} not found`)
            );
          })
          .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
          .catch(error => this.setState({ error, status: 'rejected' }));
      }, 2000);
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    if (status === 'idle') {
      return (
        <div className={css.titleEnter}> Please enter the pokemon's name </div>
      );
    }

    if (status === 'pending') {
      return <PokemonPendingView pokemonName={pokemonName} />;
    }

    if (status === 'rejected') {
      return <PokemonErrorView message={error.message} />;
    }

    if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemon} />;
    }
  }
}

// state machine //

// 'idle' - незмінний (запиту ще немає)
//'pending'; - в очікуванні (запит відбувся)
//'resolved'; - виконаний (успішний запит)
//'rejected'; - відхилений (помилка запиту)
