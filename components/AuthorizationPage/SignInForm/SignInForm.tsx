import classes from './SignInForm.module.scss';

export const SignInForm = ({ onFormDataInput, onSignIn, formData, changeAuthRout }) => {
  return (
    <form
      action='components/AuthorizationPage/SignInForm/SignInForm#'
      className={classes.FormSignIn}
    >
      <div className={classes.FormContent}>
        <div className={classes.Title}>Вход</div>

        <div className={classes.FieldsContainer}>
          <div className={`${classes.InputContainer} ${classes.Email}`}>
            <input
              name='email'
              type='email'
              placeholder='Электронная почта'
              value={formData.email}
              onInput={onFormDataInput}
            />
          </div>

          <div className={`${classes.InputContainer} ${classes.Password}`}>
            <input
              name='password'
              type='password'
              placeholder='Пароль'
              value={formData.password}
              onInput={onFormDataInput}
            />
            <div className={classes.PasswordEye} />
          </div>

          <div className={classes.RecoverPassword}>
            <a href='components/AuthorizationPage/SignInForm/SignInForm#'>Забыли пароль?</a>
          </div>
        </div>

        <button onClick={onSignIn}>Войти</button>

        <div className={classes.Alternative}>
          <div className={classes.Text}>
            <span>или</span>
          </div>

          <div className={`${classes.AlternativeContent} ${classes.AltSignIn}`}>
            <div className={classes.Buttons}>
              <a
                href='components/AuthorizationPage/SignInForm/SignInForm#'
                className={classes.Google}
              >
                <span>Google</span>
              </a>
              <a
                href='components/AuthorizationPage/SignInForm/SignInForm#'
                className={classes.Other}
              />
            </div>

            <div className={classes.Bottom}>
              <span>Нет личного кабинета?</span>
              <br />
              <span>
                Вам нужно{' '}
                <a
                  href='components/AuthorizationPage/SignInForm/SignInForm#'
                  onClick={changeAuthRout}
                >
                  Зарегистрироваться
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
