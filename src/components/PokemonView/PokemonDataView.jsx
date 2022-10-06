import css from 'components/PokemonView/PokemonData.module.css';

export const PokemonDataView = ({
  pokemon: { sprites, name, stats, types },
}) => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Pokemon info</h1>
      <img
        src={sprites.other['official-artwork'].front_default}
        alt={name}
        width="300"
      ></img>
      <h2 className={css.titleName}>{name}</h2>
      <p className={css.subtitle}>Stats</p>
      <div className={css.containerList}>
        <ul className={css.list}>
          {stats.map(item => (
            <li className={css.item} key={item.stat.name}>
              {item.stat.name}: {item.base_stat}
            </li>
          ))}
        </ul>
      </div>
      <p className={css.subtitle}>Types</p>
      <div className={css.containerList}>
        <ul className={css.list}>
          {types.map(data => (
            <li className={css.item} key={data.type.name}>
              {data.type.name}: {data.slot}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
