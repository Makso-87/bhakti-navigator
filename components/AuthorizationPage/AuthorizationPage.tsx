import classes from './AuthorizationPage.module.scss';
import authorizationBg from '../../images/authorization-bg.jpg';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { registerUser } from '../../graphql/mutations/registerUser';
import { graphQLClient } from '../../helpers/graphQLClient';
import { sendPasswordResetEmail } from '../../graphql/mutations/sendPasswordResetEmail';
import { SignInForm } from './SignInForm/SignInForm';
import { SignUpForm } from './SignUpForm/SignUpForm';
import { logInUser } from '../../graphql/mutations/logInUser';
import { setCookie } from '../../helpers/cookies';
import UserStore from '../../store/userStore';
import { getErrorMessageText } from '../../helpers/helpers';
import { errors } from '../../helpers/errors';

export const AuthorizationPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [registeredUser, setRegisteredUser] = useState(null);
  const [error, setError] = useState<null | string>(null);
  const router = useRouter();
  const { auth = '' } = router.query;

  const onFormDataInput = (event) => {
    const { value, name } = event.target;

    setForm({ ...form, [name]: value });
  };

  const changeAuthRout = async (e) => {
    e.preventDefault();
    const query = auth === 'sign_in' ? 'sign_up' : 'sign_in';
    setError(null);
    return await router.push(`/authorization?auth=${query}`);
  };

  const onSignIn = async (e) => {
    e.preventDefault();

    const result = await graphQLClient
      .request(logInUser, {
        input: { username: form.email, password: form.password },
      })
      .catch((e) => {
        setError(errors[getErrorMessageText(e)]);
        console.error(e);
      });

    const { login } = result || {};

    if (login?.user) {
      const { id, email, firstName, lastName, avatar, userACF } = login.user;
      const { city, age, inIskconSince, spiritualName } = userACF;

      UserStore.setUserData({
        id,
        email,
        firstName,
        lastName,
        avatar: avatar.url,
        token: login.authToken,
        city,
        age,
        inIskconSince,
        spiritualName,
      });

      setCookie('authorization', login.authToken);
      return await router.push(`/personal_account`);
    }
  };

  const onSignUp = async (e) => {
    e.preventDefault();

    const { registerUser: newUser } =
      (await graphQLClient
        .request(registerUser, {
          input: { username: form.email, email: form.email },
        })
        .catch((e) => {
          const emailAlreadyExist = 'Этот адрес email уже зарегистрирован';
          const userAlreadyExist = 'Это имя пользователя уже зарегистрировано';
          const networkRequestFailed = 'Ошибка сети';

          let message;
          if (e.message.includes(emailAlreadyExist) || e.message.includes(userAlreadyExist)) {
            message = emailAlreadyExist;
          }

          if (e.message.includes('Network request failed')) {
            message = networkRequestFailed;
          }

          if (e.message.includes('The email address you are trying to use is invalid')) {
            message = 'Вы указали некорректный email';
          }

          setError(message);
          console.error(e);
        })) || {};

    if (newUser?.user) {
      setRegisteredUser(newUser.user);
    }
  };

  const onResendEmail = async (e) => {
    e.preventDefault();

    await graphQLClient
      .request(sendPasswordResetEmail, {
        input: { username: registeredUser.email },
      })
      .catch((e) => {
        setError(errors[getErrorMessageText(e)]);
        console.error(e);
      });
  };

  const signInAttrs = {
    onFormDataInput,
    onSignIn,
    formData: form,
    changeAuthRout,
    error,
  };

  const signUpAttrs = {
    onFormDataInput,
    onSignUp,
    formData: form,
    changeAuthRout,
    error,
  };

  return (
    <div className={classes.AuthorizationPage}>
      <div className={classes.LeftSide}>
        <div className={classes.Img} style={{ backgroundImage: `url(${authorizationBg.src})` }} />
      </div>

      <div className={classes.RightSide}>
        <div className={classes.FormContainer}>
          {auth === 'sign_in' ? <SignInForm {...signInAttrs} /> : null}

          {auth === 'sign_up' ? (
            !registeredUser ? (
              <SignUpForm {...signUpAttrs} />
            ) : (
              <div className={classes.SuccessRegistrationText}>
                <h2>Поздравляем!</h2>

                <p>
                  Пожалуйста проверьте Вашу электронную почту - ссылка для подтверждения регистрации
                  отправлена на указанный Вами E-mail.
                </p>

                <h3>Если не пришло письмо, нажмите</h3>
                <button onClick={onResendEmail}>Отправить еще раз</button>
              </div>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
};
