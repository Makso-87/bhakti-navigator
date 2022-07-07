import classes from './InfoScreen.module.scss';

export const InfoScreen = (props) => {
  return (
    <div className={classes.InfoScreen}>
      <div className={classes.SiteWrap}>
        <div className={classes.Content}>
          <div className={classes.Icon} />

          <div className={classes.Text}>
            <p>
              В конце курса предусмотрена аттестация в форме теста. Успешно прошедшим курс будет
              выдан сертификат. Сертификат будет выслан в электронном виде индивидуально каждому
              выпускнику курса непосредственно Секретариатом IDC (Маяпур).
            </p>

            <p>
              Курс проводится бесплатно, но вы всегда можете оставить пожертвование в знак
              благодарности ведущему или организаторам. Сумму взноса вы определяете сами, исходя из
              ваших финансовых возможностей.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
