import PropTypes from "prop-types";
import "./Statistics.css";

function Statistics({ title, items }) {
  return (
    <section className="Statistics">
      {title && <h2 className="Statistics__title">{title}</h2>}
      <ul className="Statistics__stat-list">
        {items.map((item) => (
          <li className="Statistics__item" key={item.id}>
            <span className="Statistics__label">{item.label}</span>
            <span className="Statistics__percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
