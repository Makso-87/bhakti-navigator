import classes from './AccountData.module.scss';
import { observer } from 'mobx-react';
import userStore from '../../../../store/userStore';
import { removeCookie } from '../../../../helpers/cookies';
import UserStore from '../../../../store/userStore';
import PagesStore from '../../../../store/pagesStore';
import { useRouter } from 'next/router';

export const AccountData = observer(() => {
  const { avatar, email, firstName, lastName } = userStore;
  const router = useRouter();

  console.log('firstName', firstName, 'lastName', lastName);

  const onAccountDataClick = async (e) => {
    e.preventDefault();
    return await router.push('/personal_account');
  };

  const onLogOut = async (e) => {
    e.preventDefault();
    removeCookie('authorization');

    UserStore.setUserData({
      email: '',
      firstName: '',
      lastName: '',
      avatar: null,
      token: '',
      city: '',
      age: '',
      inIskconSince: '',
      spiritualName: '',
    });

    if (PagesStore.currentPage === 'personal_account') {
      return await router.push('/');
    }
  };

  return (
    <div className={classes.AccountData}>
      <div className={classes.Avatar}>
        <figure onClick={onAccountDataClick}>
          <div className={classes.ImgContainer}>
            {avatar ? (
              <div className={classes.Img} style={{ backgroundImage: `url(${avatar})` }} />
            ) : (
              <div className={classes.Initials}>
                <span>{firstName ? firstName[0].toUpperCase() : email[0].toUpperCase()}</span>
                <span>{lastName ? lastName[0].toUpperCase() : email[1].toUpperCase()}</span>
              </div>
            )}
          </div>

          <figcaption>
            {firstName || lastName ? (
              <div className={classes.Name}>
                <span>{firstName}</span>
                <span>{lastName}</span>
              </div>
            ) : null}

            <div className={classes.Email}>{email}</div>
          </figcaption>
        </figure>
      </div>

      <button className={classes.LogOut} onClick={onLogOut}>
        Выйти
      </button>
    </div>
  );
});
