import classes from './PersonalAccountPage.module.scss';
import { Recommendations } from '../CommonComponents/Recommendations/Recommendations';
import { QuestionForm } from '../CommonComponents/QuestionForm/QuestionForm';
import { Layout } from '../Layout';

export const PersonalAccountPage = (props) => {
  return (
    <Layout>
      <div className={classes.PersonalAccountPage}>
        <div className={classes.ProfileInfo}>
          <div className={classes.SiteWrap}>
            <div className={classes.ProfileContainer}>
              <div className={classes.Content}>
                <form action='#'>
                  <div className={classes.ProfilePhoto}>
                    <input type='file' id='avatar' />

                    <label htmlFor='avatar'>
                      <div
                        className={classes.Img}
                        style={{ backgroundImage: `url(./images/account-girl-face.png);` }}
                      />
                    </label>
                  </div>

                  <div className={classes.ProfileData}>
                    <div className={classes.ProfileDataLeft}>
                      <div className={`${classes.DataItem} ${classes.Name}`}>
                        <div className={classes.Key}>Имя/Духовное имя</div>

                        <div className={classes.Value}>
                          <div className={classes.Text}>Кришнадаси д.д.</div>
                          <input type='text' />
                        </div>
                      </div>

                      <div className={`${classes.DataItem} ${classes.Email}`}>
                        <div className={classes.Key}>Электронная почта</div>

                        <div className={classes.Value}>
                          <div className={classes.Text}>ekaterina@mail.ru</div>
                          <input type='text' />
                        </div>
                      </div>

                      <div className={`${classes.DataItem} ${classes.Name}`}>
                        <div className={classes.Key}>Пароль</div>

                        <div className={`${classes.Value} ${classes.Password}`}>
                          <div className={classes.Text}>.............</div>
                          <input type='password' />
                        </div>
                      </div>
                    </div>

                    <div className={classes.ProfileDataRight}>
                      <div className={`${classes.DataItem} ${classes.City}`}>
                        <div className={classes.Key}>Город</div>

                        <div className={classes.Value}>
                          <div className={classes.Text}>Москва</div>
                          <input type='text' />
                        </div>
                      </div>

                      <div className={`${classes.DataItem} ${classes.Age}`}>
                        <div className={classes.Key}>Возраст</div>

                        <div className={classes.Value}>
                          <div className={classes.Text}>29</div>
                          <input type='text' />
                        </div>
                      </div>

                      <div className={`${classes.DataItem} ${classes.City}`}>
                        <div className={classes.Key}>В ИСККОН с</div>

                        <div className={classes.Value}>
                          <div className={classes.Text}>2018</div>
                          <input type='text' />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={classes.ProfileEdit} />

                  <div className={classes.ProfileConfirm}>
                    <input type='submit' id='confirm-edit' />
                    <label htmlFor='confirm-edit' />
                  </div>
                </form>
              </div>

              <div className={classes.ProfileDelete} />
            </div>
          </div>
        </div>

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
};
