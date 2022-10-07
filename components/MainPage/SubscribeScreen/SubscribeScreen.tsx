import classes from './SubscribeScreen.module.scss';

export const SubscribeScreen = () => {
  return (
    <div className={classes.SubscribeScreen}>
      <div className={classes.FormBox}>
        <form action='#'>
          <div className={classes.Text}>
            Подпишитесь на нашу рассылку и получайте свежие новости проекта и полезные материалы для
            вашего духовного роста
          </div>

          <div className={classes.InputsBox}>
            <div className={classes.InputContainer}>
              <input type='text' placeholder='yaliubliukrishnu@gmail.com' />
              <input type='submit' value='' />
            </div>

            <div className={classes.CheckboxContainer}>
              <input type='checkbox' id='subscribe-checkbox' />
              <label htmlFor='subscribe-checkbox'>
                Я ознакомился (-лась) с политикой конфиденциальности и согласен (-сна) на обработку
                моих персональных данных
              </label>
            </div>
          </div>

          <div className={classes.Telegram}>
            <a href='https://t.me/+m7n1EqDg9YwxMzRi' target='_blank'>
              Мы в Telegram
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
