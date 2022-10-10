import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import classes from './QuestionForm.module.scss';
import banner2Q from '../../../images/banner2-q.png';
import { useContext, useRef } from 'react';
import { PopupContext } from '../../../context/popupContext';
import { lockSite } from '../../../helpers/helpers';

configureAnchors({ offset: -84, scrollDuration: 400 });

export const QuestionForm = () => {
  const popupContextData = useContext(PopupContext);
  const ref = useRef(null);

  const onClick = () => {
    lockSite();
    popupContextData.setPopupQuestionForm({ state: true, ref });
  };

  return (
    <ScrollableAnchor id='question-form'>
      <div className={classes.QuestionFormBlock}>
        <div className={classes.SiteWrap}>
          <div className={classes.Content}>
            <div className={classes.LeftSide}>
              <div className={classes.Img} style={{ backgroundImage: `url(${banner2Q.src})` }} />
            </div>

            <div className={classes.RightSide}>
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

                <div className={classes.Text}>
                  Самые насущные вопросы мы зададим экспертам рубрики QA.
                </div>

                <div className={classes.Text}>
                  Следите за обновлениями в Телеграм и Youtube канале
                </div>

                <button onClick={onClick} className={classes.Button}>
                  Задать вопрос
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  );
};
