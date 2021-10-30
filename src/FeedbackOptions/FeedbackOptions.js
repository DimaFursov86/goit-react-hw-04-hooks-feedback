import React from "react";
import s from "../FeedbackOptions/FeedbackOptions.module.css";
import PropTypes from "prop-types";
const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={s.buttonBox}>
    {options.map((option) => (
      <button
        key={option}
        className={s.buttons}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
