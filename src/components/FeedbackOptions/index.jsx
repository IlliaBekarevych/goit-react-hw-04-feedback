import PropTypes from 'prop-types';
import s from './index.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.feedback}>
      {options.map(name => {
        return (
          <div key={name}>
            <button
              className={s.btn}
              onClick={() => onLeaveFeedback(name)}
              type="button"
              name={name}
            >
              {name}
            </button>
          </div>
        );
      })}
    </div>
  );
};

FeedbackOptions.prototype = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
