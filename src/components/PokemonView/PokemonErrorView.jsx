import errorImg from 'components/Img/pikachu.jpg';
import css from 'components/PokemonView/PokemonData.module.css';

export const PokemonErrorView = ({ message }) => (
  <div className={css.imageError}>
    <img src={errorImg} width="300" alt="sad pokemon" />
    <p className={css.subtitleError}>{message}</p>
  </div>
);
