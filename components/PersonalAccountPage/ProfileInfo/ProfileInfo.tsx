import classes from './ProfileInfo.module.scss';
import UserStore from '../../../store/userStore';
import { useEffect, useState } from 'react';
import { graphQLClient } from '../../../helpers/graphQLClient';
import { updateUser } from '../../../graphql/mutations/updateUser';
import { changeAcfByRestApi, decodeUserId } from '../../../helpers/helpers';
import { getCookie } from '../../../helpers/cookies';

export const ProfileInfo = () => {
  const [editMode, setEditMode] = useState(false);
  const { id, avatar, firstName, email, city, age, inIskconSince } = UserStore;
  const [form, setForm] = useState({
    name: firstName,
    email,
    city,
    age,
    iskcon: inIskconSince,
  });

  const inputHandler = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onProfileEdit = () => {
    console.log('user', UserStore);
    setEditMode(true);
  };

  const changeDataByRestApi = async () => {
    const result = await changeAcfByRestApi(id, {
      city: form.city,
      age: form.age,
      in_iskcon_since: form.iskcon,
    });

    const { city, age, in_iskcon_since } = result;
    return { city, age, inIskconSince: in_iskcon_since };
  };

  const changeDataByGraphQl = async () => {
    const cookie = getCookie('authorization');

    return await graphQLClient
      .request(
        updateUser,
        {
          input: {
            id,
            firstName: form.name,
          },
        },
        { authorization: `Bearer ${cookie}` }
      )
      .then(({ updateUser: updatedUser }) => {
        const { firstName } = updatedUser?.user || {};
        return { firstName };
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const onProfileEditConfirm = async (e) => {
    e.preventDefault();
    const { setUserData, id, ...userData } = UserStore;

    let userDataRestApi = {};
    let userDataGraphQl = {};

    if (city !== form.city || age !== form.age || inIskconSince !== form.iskcon) {
      userDataRestApi = { ...(await changeDataByRestApi()) };
    }

    if (firstName !== form.name || email !== form.email) {
      userDataGraphQl = { ...(await changeDataByGraphQl()) };
    }

    UserStore.setUserData({
      ...userData,
      ...userDataGraphQl,
      ...userDataRestApi,
    });

    setEditMode(false);
  };

  const onProfileEditCancel = (e) => {
    e.preventDefault();
    setEditMode(false);
    setForm({ name: firstName, email, city, age, iskcon: inIskconSince });
  };

  return (
    <div className={classes.ProfileInfo}>
      <div className={classes.SiteWrap}>
        <div className={classes.ProfileContainer}>
          <div className={classes.Content}>
            <form action='#'>
              <div className={classes.ProfilePhoto}>
                <input type='file' id='avatar' />

                <label htmlFor='avatar'>
                  <div className={classes.Img} style={{ backgroundImage: avatar }} />
                </label>
              </div>

              <div className={classes.ProfileData}>
                <div className={classes.ProfileDataLeft}>
                  <div className={`${classes.DataItem} ${classes.Name}`}>
                    <div className={classes.Key}>Имя/Духовное имя</div>

                    <div className={classes.Value}>
                      {!editMode ? <div className={classes.Text}>{firstName}</div> : null}
                      {editMode ? (
                        <input type='text' name='name' value={form.name} onInput={inputHandler} />
                      ) : null}
                    </div>
                  </div>

                  <div className={`${classes.DataItem} ${classes.Email}`}>
                    <div className={classes.Key}>Электронная почта</div>

                    <div className={classes.Value}>
                      <div className={classes.Text}>{email}</div>
                      {/*{editMode ? (*/}
                      {/*  <input*/}
                      {/*    type='email'*/}
                      {/*    name='email'*/}
                      {/*    value={form.email}*/}
                      {/*    onInput={inputHandler}*/}
                      {/*  />*/}
                      {/*) : null}*/}
                    </div>
                  </div>

                  {/*<div className={`${classes.DataItem} ${classes.Name}`}>*/}
                  {/*  <div className={classes.Key}>Пароль</div>*/}

                  {/*  <div className={`${classes.Value} ${classes.Password}`}>*/}
                  {/*    <div className={classes.Text}>.............</div>*/}
                  {/*    <input type='password' />*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                </div>

                <div className={classes.ProfileDataRight}>
                  <div className={`${classes.DataItem} ${classes.City}`}>
                    <div className={classes.Key}>Город</div>

                    <div className={classes.Value}>
                      {!editMode ? <div className={classes.Text}>{city}</div> : null}
                      {editMode ? (
                        <input type='text' name='city' value={form.city} onInput={inputHandler} />
                      ) : null}
                    </div>
                  </div>

                  <div className={`${classes.DataItem} ${classes.Age}`}>
                    <div className={classes.Key}>Возраст</div>

                    <div className={classes.Value}>
                      {!editMode ? <div className={classes.Text}>{age}</div> : null}
                      {editMode ? (
                        <input type='text' name='age' value={form.age} onInput={inputHandler} />
                      ) : null}
                    </div>
                  </div>

                  <div className={`${classes.DataItem} ${classes.City}`}>
                    <div className={classes.Key}>В ИСККОН с</div>

                    <div className={classes.Value}>
                      {!editMode ? <div className={classes.Text}>{inIskconSince}</div> : null}
                      {editMode ? (
                        <input
                          type='text'
                          name='iskcon'
                          value={form.iskcon}
                          onInput={inputHandler}
                        />
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>

              {!editMode ? <div className={classes.ProfileEdit} onClick={onProfileEdit} /> : null}

              {editMode ? (
                <div className={classes.ProfileConfirm}>
                  <button className={classes.Cancel} onClick={onProfileEditCancel} />
                  <button className={classes.Confirm} onClick={onProfileEditConfirm} />
                </div>
              ) : null}
            </form>
          </div>

          <div className={classes.ProfileDelete} />
        </div>
      </div>
    </div>
  );
};
