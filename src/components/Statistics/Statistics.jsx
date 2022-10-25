import PropTypes from 'prop-types';
import css from "./Statistics.module.css"

export function Statistics({ title, stat }) {
    
  return (
    <section className={css.statistics}>
      { title && <h2 className={css.title}>{title}</h2> }

      <ul className={css.statList}>
        {stat.map(item => (
            <li className="item" key={item.id}>
            <span className="label">{item.label}: </span>
            <span className="percentage">{item.percentage}%</span>
          </li>))
        }
    </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,

  stat: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,)
};
