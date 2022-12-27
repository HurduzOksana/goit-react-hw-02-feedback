import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.btnList}>
      {options.map((name, index) => {
        return (
          <li key={index}>
            <button
              className={css.btn}
              name={name}
              type="button"
              onClick={onLeaveFeedback}
            >
              {name}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
