import s from "./Statistics.module.css";
import PropTypes from "prop-types";
export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className={s.box}>
      <div className={s.statsBox}>
        <h2>Statistic</h2>
        <ul className={s.stats}>
          <li className={s.statsItem}>
            <span className={s.label}>Good</span>
            <span className={s.quantity}>{good}</span>
          </li>
          <li className={s.statsItem}>
            <span className={s.label}>Neutral</span>
            <span className={s.quantity}>{neutral}</span>
          </li>
          <li className={s.statsItem}>
            <span className={s.label}>Bad</span>
            <span className={s.quantity}>{bad}</span>
          </li>
          <li className={s.statsItem}>
            <span className={s.label}>Total</span>
            <span className={s.quantity}>{total}</span>
          </li>
          <li className={s.statsItem}>
            <span className={s.label}>Positive feedback</span>
            <span className={s.quantity}>{positivePercentage}%</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
