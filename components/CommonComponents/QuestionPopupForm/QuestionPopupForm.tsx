import classes from './QuestionPopupForm.module.scss';
import { Close } from '../Close/Close';
import { useContext } from 'react';
import { PopupContext } from '../../../context/popupContext';
import { unlockSite } from '../../../helpers/helpers';

export const QuestionPopupForm = (props) => {
  const { ref } = props;
  const popupContextData = useContext(PopupContext);

  const onClose = () => {
    unlockSite();
    popupContextData.setPopupQuestionForm({ state: false, ref: null });
  };

  return (
    <div ref={ref} className={classes.QuestionPopupForm}>
      <div className={classes.FormContainer}>
        <Close onClick={onClose} className={classes.Close} />

        <form action='#'>
          <form action='#'>
            <div className={classes.TextAreaContainer}>
              <label htmlFor=''>Ваш вопрос</label>
              <textarea placeholder='Ваш вопрос' />
            </div>

            <div className={classes.InputFields}>
              <div className={classes.InputContainer}>
                <label htmlFor='name'>Ваше имя</label>
                <input type='text' id='name' placeholder='Ваше имя' />
              </div>

              <div className={classes.InputContainer}>
                <label htmlFor='email'>Email</label>
                <input type='text' id='email' placeholder='E-mail' />
              </div>
            </div>

            <div className={classes.CheckboxContainer}>
              <input type='checkbox' id='privacy-policy' />
              <label htmlFor='privacy-policy'>
                Я ознакомился (-лась) с политикой конфиденциальности и согласен (-сна) на обработку
                моих персональных данных
              </label>
            </div>

            <div className={classes.ButtonContainer}>
              <input type='submit' value='Отправить' />
            </div>
          </form>
        </form>
      </div>
    </div>
  );
};
