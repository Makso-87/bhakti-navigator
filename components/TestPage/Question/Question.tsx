import classes from './Question.module.scss';
import { useState } from 'react';
import { QuestionProps } from '../../../interfaces/interfaces';

export const Question = (props: QuestionProps) => {
  const { clickHandler, variants = [], text, number } = props;
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const activeTestButton = () => {
    if (buttonDisabled) {
      setButtonDisabled(false);
    }
  };

  return (
    <div className={classes.Question} data-question={`question-${number}`}>
      <div className={classes.Text}>
        <span>{number}.</span>
        {text}
      </div>

      <div className={classes.Variants}>
        {variants.length
          ? variants.map((item, index) => {
              return (
                <div key={index} className={classes.InputContainer}>
                  <input
                    type={item.type}
                    onChange={activeTestButton}
                    name={`question-${number}`}
                    value={item.letter}
                    id={`question-${number}-${item.letter}`}
                  />
                  <label htmlFor={`question-${number}-${item.letter}`}>
                    <span>{item.letter})</span> {item.text}
                  </label>
                </div>
              );
            })
          : null}
      </div>

      <button onClick={clickHandler} className={classes.ButtonNext} disabled={buttonDisabled}>
        Дальше
      </button>
    </div>
  );
};
