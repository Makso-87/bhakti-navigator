import classes from './ProfileInfo.module.scss';
import UserStore from '../../../store/userStore';
import { useState } from 'react';
import { graphQLClient } from '../../../helpers/graphQLClient';
import { updateUser } from '../../../graphql/mutations/updateUser';
import { decodeUserId } from '../../../helpers/helpers';
import apiFetch from '@wordpress/api-fetch';

export const ProfileInfo = () => {
  const [editMode, setEditMode] = useState(false);
  const { id, avatar, firstName, email, city, age, inIskconSince, token } = UserStore;
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

  const onProfileEditConfirm = () => {
    const { setUserData, id, ...userData } = UserStore;

    const decodedId = decodeUserId(id);
    console.log('decodedId', decodedId);

    const url = `https://bhaktinavigator.tmweb.ru/bhakti-navigator-wp/wp-json/wp/v2/users/${decodedId}?fields[city]=${form.city}&fields[age]=${form.age}&fields[city]=${form.city}&fields[inIskconSince]=${form.iskcon}`;
    const data = {
      acf: {
        city: form.city,
      },
    };
    const params = {
      cache: 'no-cache',
      method: 'PATCH',
      credentials: 'omit',
    };

    apiFetch({
      path: `https://bhaktinavigator.tmweb.ru/bhakti-navigator-wp/wp-json/wp/v2/users/${decodedId}`,
      method: 'POST',
      data: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log('update user', res);
      })
      .catch((e) => {
        console.log('update error', e);
      });

    // fetch(url, {
    //   cache: 'no-cache',
    //   method: 'PATCH',
    //   credentials: 'omit',
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //     // 'Content-Type': 'application/json; charset=UTF-8; application/x-www-form-urlencoded',
    //     'Content-Type': 'application/json; charset=UTF-8;',
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((e) => {
    //     console.log('update error', e);
    //   });

    // graphQLClient
    //   .request(updateUser, {
    //     input: {
    //       id,
    //       firstName: form.name,
    //       email: form.email,
    //       userACF: {
    //         city: form.city,
    //         age: form.age,
    //         inIskconSince: form.iskcon,
    //       },
    //     },
    //   })
    //   .then(({ updateUser: updatedUser }) => {
    //     const { firstName, email, userACF } = updatedUser;
    //     const { city, age, inIskconSince } = userACF;
    //
    //     UserStore.setUserData({ email, firstName, city, age, inIskconSince });
    //   })
    //   .catch((e) => {
    //     console.error(e);
    //   });

    setEditMode(false);
  };

  const onProfileEditCancel = () => {
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
                      {!editMode ? <div className={classes.Text}>{email}</div> : null}
                      {editMode ? (
                        <input
                          type='email'
                          name='email'
                          value={form.email}
                          onInput={inputHandler}
                        />
                      ) : null}
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
