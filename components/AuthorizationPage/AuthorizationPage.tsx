import classes from './AuthorizationPage.module.scss';
import authorizationBg from '../../images/authorization-bg.jpg';
import { useRouter } from 'next/router';

export const AuthorizationPage = () => {
  const router = useRouter();
  const { auth = '' } = router.query;

  const changeAuthRout = async (e) => {
    e.preventDefault();
    const query = auth === 'sign_in' ? 'sign_up' : 'sign_in';
    return await router.push(`/authorization?auth=${query}`);
  };

  const onSignIn = async (e) => {
    e.preventDefault();
    return await router.push(`/personal_account`);
  };

  return (
    <div className={classes.AuthorizationPage}>
      <div className={classes.LeftSide}>
        <div className={classes.Img} style={{ backgroundImage: `url(${authorizationBg.src})` }} />
      </div>

      <div className={classes.RightSide}>
        <div className={classes.FormContainer}>
          {auth === 'sign_in' ? (
            <form action='#' onSubmit={onSignIn} className={classes.FormSignIn}>
              <div className={classes.FormContent}>
                <div className={classes.Title}>Вход</div>

                <div className={classes.FieldsContainer}>
                  <div className={`${classes.InputContainer} ${classes.Email}`}>
                    <input type='text' placeholder='Электронная почта' />
                  </div>

                  <div className={`${classes.InputContainer} ${classes.Password}`}>
                    <input type='password' placeholder='Пароль' />
                    <div className={classes.PasswordEye} />
                  </div>

                  <div className={classes.RecoverPassword}>
                    <a href='#'>Забыли пароль?</a>
                  </div>
                </div>

                <input type='submit' value='Войти' />

                <div className={classes.Alternative}>
                  <div className={classes.Text}>
                    <span>или</span>
                  </div>

                  <div className={`${classes.AlternativeContent} ${classes.AltSignIn}`}>
                    <div className={classes.Buttons}>
                      <a href='#' className={classes.Google}>
                        <span>Google</span>
                      </a>
                      <a href='#' className={classes.Other} />
                    </div>

                    <div className={classes.Bottom}>
                      <span>Нет личного кабинета?</span>
                      <br />
                      <span>
                        Вам нужно{' '}
                        <a href='#' onClick={changeAuthRout}>
                          Зарегистрироваться
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          ) : null}

          {auth === 'sign_up' ? (
            <form action='#' className={classes.FormSignIn}>
              <div className={classes.FormContent}>
                <div className={classes.Title}>
                  Харе Кришна!
                  <br /> Регистрируемся
                </div>

                <div className={classes.FieldsContainer}>
                  <div className={`${classes.InputContainer} ${classes.Email}`}>
                    <input type='text' placeholder='Электронная почта' />
                  </div>

                  <div className={`${classes.InputContainer} ${classes.Password}`}>
                    <input type='password' placeholder='Пароль' />
                    <div className={classes.PasswordEye} />
                  </div>

                  <div className={classes.RecoverPassword}>
                    <a href='#'>Забыли пароль?</a>
                  </div>
                </div>

                <input type='submit' value='Зарегистрироваться' />

                <div className={classes.Alternative}>
                  <div className={classes.Text}>
                    <span>или</span>
                  </div>

                  <div className={`${classes.AlternativeContent} ${classes.AltSignUp}`}>
                    <div className={classes.Buttons}>
                      <a href='#' className={classes.Google}>
                        <span>Google</span>
                      </a>
                      <a href='#' className={classes.Other} />
                    </div>

                    <div className={classes.Bottom}>
                      <span>Уже есть личный кабинет?</span>
                      <span>
                        Можете{' '}
                        <a href='#' onClick={changeAuthRout}>
                          Войти
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          ) : null}
        </div>
      </div>
    </div>
  );
};
