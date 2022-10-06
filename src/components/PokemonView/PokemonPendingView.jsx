import { ImSpinner2 } from 'react-icons/im';
import WhoThatPokemon from 'components/Img/WhoThatPokemon.png';
// import { PokemonDataView } from 'components/PokemonView/PokemonDataView';
import css from 'components/PokemonView/PokemonData.module.css';

export const PokemonPendingView = ({ pokemonName }) => {
  //   const pokemon = {
  //     name: pokemonName,
  //     sprites: {
  //       other: {
  //         'official-artwork': {
  //           front_default: WhoThatPokemon,
  //         },
  //       },
  //     },
  //     stats: [],
  //   };
  return (
    <div className={css.wrapper}>
      <div className={css.spinerWrapper}>
        <ImSpinner2 size="50" className={css.iconSpiner} />
      </div>

      <div className={css.wrapper}>
        <p className={css.subtitlePending}>Loading...</p>
        <img
          className={css.imgPending}
          src={WhoThatPokemon}
          alt="who that pokemon"
        ></img>
      </div>
      {/* <PokemonDataView pokemon={pokemon} /> */}
    </div>
  );
};
