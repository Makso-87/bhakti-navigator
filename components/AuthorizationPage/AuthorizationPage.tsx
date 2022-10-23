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

export const AuthorizationPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [successRegisteredUser, setSuccessRegisteredUser] = useState(false);
  const router = useRouter();
  const { auth = '' } = router.query;

  const onFormDataInput = (event) => {
    const { value, name } = event.target;

    setForm({ ...form, [name]: value });
  };

  const changeAuthRout = async (e) => {
    e.preventDefault();
    const query = auth === 'sign_in' ? 'sign_up' : 'sign_in';
    return await router.push(`/authorization?auth=${query}`);
  };

  const onSignIn = async (e) => {
    e.preventDefault();

    const { login: loginedUser } = await graphQLClient
      .request(logInUser, {
        input: { username: form.email, password: form.password },
      })
      .catch((e) => console.log(e));

    console.log('loginedUser', loginedUser, 'email', form.email, 'password', form.password);

    if (loginedUser?.user) {
      const { email, firstName, lastName, avatar, userACF } = loginedUser.user;
      const { city, age, inIskconSince, spiritualName } = userACF;

      UserStore.setUserData({
        email,
        firstName,
        lastName,
        avatar: avatar.url,
        token: loginedUser.authToken,
        city,
        age,
        inIskconSince,
        spiritualName,
      });

      setCookie('authorization', loginedUser.authToken);
      return await router.push(`/personal_account`);
    }
  };

  const onSignUp = async (e) => {
    e.preventDefault();
    const { registerUser: registeredUser } = await graphQLClient.request(registerUser, {
      input: { username: form.email, email: form.email },
    });

    if (registeredUser.user) {
      setSuccessRegisteredUser(!!registeredUser.user);
    }
  };

  const signInAttrs = {
    onFormDataInput,
    onSignIn,
    formData: form,
    changeAuthRout,
  };

  const signUpAttrs = {
    onFormDataInput,
    onSignUp,
    formData: form,
    changeAuthRout,
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
            !successRegisteredUser ? (
              <SignUpForm {...signUpAttrs} />
            ) : (
              <div className={classes.SuccessRegistrationText}>
                <h2>Поздравляем!</h2>

                <div>
                  Пожалуйста проверьте Вашу электронную почту - ссылка для подтверждения регистрации
                  отправлена на указанный Вами E-mail.
                </div>
              </div>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
};
