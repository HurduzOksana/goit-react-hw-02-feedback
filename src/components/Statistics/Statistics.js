import Notification from '../Notification/Notification';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  totalfeedback,
  feedbackPercentage,
}) => {
  return (
    <div className={css.statistics}>
      {totalfeedback > 0 && (
        <ul className={css.statList}>
          <li className={css.item}>Good: {good}</li>
          <li className={css.item}>Neutral: {neutral}</li>
          <li className={css.item}>Bad: {bad}</li>
          <li className={css.item}>Total: {totalfeedback}</li>
          <li className={css.item}>Positive feedback: {feedbackPercentage}%</li>
        </ul>
      )}

      {totalfeedback === 0 && <Notification message="No feedback given" />}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalfeedback: PropTypes.number.isRequired,
  feedbackPercentage: PropTypes.number.isRequired,
};

export default Statistics;
