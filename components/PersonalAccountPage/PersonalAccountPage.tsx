import classes from './PersonalAccountPage.module.scss';
import { Recommendations } from '../CommonComponents/Recommendations/Recommendations';
import { QuestionForm } from '../CommonComponents/QuestionForm/QuestionForm';
import { Layout } from '../Layout';
import { observer } from 'mobx-react-lite';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import userStore from '../../store/userStore';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const PersonalAccountPage = observer((props) => {
  const { token } = userStore;
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push('/');
    }
  }, []);

  return (
    <Layout>
      <div className={classes.PersonalAccountPage}>
        <ProfileInfo />
        <div className={classes.TestResult}>
          <div className={classes.SiteWrap}>
            <div className={classes.Title}>Результаты теста</div>

            <div className={classes.TestResultContainer}>
              <div className={classes.Hint}>
                Здесь будет отражаться ваша персональная дорожная карта и рекомендованный маршрут
              </div>

              <a href='#' className={classes.GoToTest}>
                Пройти тест
              </a>
            </div>
          </div>
        </div>

        <div className={classes.RecommendedTopics}>
          <div className={classes.SiteWrap}>
            <div className={classes.Title}>Рекомендуемые темы</div>

            <div className={classes.Hint}>
              <p>Здесь будут отражаться рекомендованные для изучения именно вам темы.</p>

              <p>
                Если вы хотите достичь наибольших результатов на пути бхакти, рекомендуем изучать их
                последовательно и, в идеале, под руководством вашего наставника.
              </p>
            </div>

            <div className={classes.RecommendedTopicsList} />

            <a href='#' className={classes.GoToTest}>
              Пройти тест
            </a>
          </div>
        </div>

        <div className={classes.SiteWrap}>
          <Recommendations />
        </div>

        <QuestionForm />

        <div className={classes.ConfirmDeletePopup}>
          <div className={classes.Title}>Удаление учетной записи</div>
          <div className={classes.Text}>
            После удаления учетной запись будет удален ваш личьный кабинет и дорожняя карта.
            Действительно ли вы желаете удалить свою учетную запись?
          </div>

          <div className={classes.Buttons}>
            <a href='#' className={`${classes.Buttons} ${classes.Yes}`}>
              Да, удалить
            </a>
            <a href='#' className={`${classes.Buttons} ${classes.No}`}>
              Конечно нет
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
});
