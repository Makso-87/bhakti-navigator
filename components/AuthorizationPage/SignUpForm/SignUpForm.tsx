import classes from './SignUpForm.module.scss';

export const SignUpForm = ({ onFormDataInput, formData, onSignUp, changeAuthRout, error }) => {
  return (
    <form action='#' className={classes.FormSignUp}>
      <div className={classes.FormContent}>
        <div className={classes.Title}>
          Харе Кришна!
          <br /> Регистрируемся
        </div>

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

          {!!error ? <div className={classes.ErrorsBlock}>{error}</div> : null}

          {/*<div className={`${classes.InputContainer} ${classes.Password}`}>*/}
          {/*  <input*/}
          {/*    name='password'*/}
          {/*    type='password'*/}
          {/*    placeholder='Пароль'*/}
          {/*    value={form.password}*/}
          {/*    onInput={onFormDataInput}*/}
          {/*  />*/}
          {/*  <div className={classes.PasswordEye} />*/}
          {/*</div>*/}

          <div className={classes.RecoverPassword}>
            <a href='#'>Забыли пароль?</a>
          </div>
        </div>

        <button onClick={onSignUp}>Зарегистрироваться</button>

        <div className={classes.Alternative}>
          {/*<div className={classes.Text}>*/}
          {/*  <span>или</span>*/}
          {/*</div>*/}

          <div className={`${classes.AlternativeContent} ${classes.AltSignUp}`}>
            {/*<div className={classes.Buttons}>*/}
            {/*  <a href='#' className={classes.Google}>*/}
            {/*    <span>Google</span>*/}
            {/*  </a>*/}
            {/*  <a href='#' className={classes.Other} />*/}
            {/*</div>*/}

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
  );
};
