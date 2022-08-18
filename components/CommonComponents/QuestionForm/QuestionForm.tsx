import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import classes from './QuestionForm.module.scss';
import banner2Q from '../../../images/banner2-q.png';

configureAnchors({ offset: -84, scrollDuration: 400 });

export const QuestionForm = () => {
  return (
    <ScrollableAnchor id='question-form'>
      <div className={classes.QuestionFormBlock}>
        <div className={classes.SiteWrap}>
          <div className={classes.Content}>
            <div className={classes.LeftSide}>
              <div className={classes.Img} style={{ backgroundImage: `url(${banner2Q.src})` }} />
            </div>

            <div className={classes.RightSide}>
              <form action='#'>
                <div className={classes.Title}>
                  <div className={classes.StrongText}>
                    Есть вопрос
                    <br /> о духовной жизни?
                  </div>
                  <div className={classes.Text}>
                    Некого спросить?
                    <br /> Не можете найти ответ?
                  </div>
                  <div className={classes.MediumText}>Задайте его нам!</div>
                </div>

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
                    Я ознакомился (-лась) с политикой конфиденциальности и согласен (-сна) на
                    обработку моих персональных данных
                  </label>
                </div>

                <input type='submit' value='Отправить' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  );
};
