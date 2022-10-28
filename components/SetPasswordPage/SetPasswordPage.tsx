import { useRouter } from 'next/router';
import classes from './SetPasswordPage.module.scss';
import { useState } from 'react';
import { graphQLClient } from '../../helpers/graphQLClient';
import { resetUserPassword } from '../../graphql/mutations/resetUserPassword';
import Link from 'next/link';
import { getErrorMessageText } from '../../helpers/helpers';
import { errors } from '../../helpers/errors';

export const SetPasswordPage = () => {
  const router = useRouter();
  const { key = '', login = '' } = router.query;
  const [form, setForm] = useState({ password: '', confirm_password: '' });
  const [error, setError] = useState<null | string>(null);
  const [successResetUserPassword, setSuccessResetUserPassword] = useState(false);

  const onFormDataInput = (event) => {
    const { value, name } = event.target;

    setForm({ ...form, [name]: value });
  };

  const onSetPassword = async (e) => {
    e.preventDefault();

    graphQLClient
      .request(resetUserPassword, {
        input: {
          key,
          login,
          password: form.password,
        },
      })
      .then(({ resetUserPassword: newUserPassword }) => {
        setSuccessResetUserPassword(!!newUserPassword?.user);
      })
      .catch((e) => {
        setError(errors[getErrorMessageText(e)]);
        console.error(e);
      });
  };

  console.log('key', key, 'login', login);
  return (
    <div className={classes.SetPasswordPage}>
      <div className={classes.FormContainer}>
        {!successResetUserPassword ? (
          <form action='#'>
            <div className={classes.FormContent}>
              <div className={classes.Title}>Придумайте пароль для Вашей учетной записи</div>

              <div className={classes.FieldsContainer}>
                <div className={`${classes.InputContainer} ${classes.Password}`}>
                  <input
                    name='password'
                    type='password'
                    placeholder='Пароль'
                    value={form.password}
                    onInput={onFormDataInput}
                  />
                  <div className={classes.PasswordEye} />
                </div>

                <div className={`${classes.InputContainer} ${classes.Password}`}>
                  <input
                    name='confirm_password'
                    type='password'
                    placeholder='Повторите пароль'
                    value={form.confirm_password}
                    onInput={onFormDataInput}
                  />
                  <div className={classes.PasswordEye} />
                </div>

                {!!error ? (
                  <div
                    className={classes.ErrorsBlock}
                    dangerouslySetInnerHTML={{ __html: error }}
                  />
                ) : null}

                <button onClick={onSetPassword}>Установить пароль</button>
              </div>
            </div>
          </form>
        ) : (
          <div>
            <h2>Пароль успешно установлен!</h2>
            <div>
              Теперь Вы можете <Link href='authorization?auth=sign_in'>войти</Link> в свою учетную
              запись
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
