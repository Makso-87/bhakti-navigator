import classes from './ForWhom.module.scss';

export const ForWhom = (props) => {
  return (
    <div className={classes.ForWhomScreen}>
      <div className={classes.SiteWrap}>
        <h2>Кому подойдет этот курс</h2>

        <ul className={classes.List}>
          <li>
            <div className={classes.Content}>
              <span className={classes.StrongText}>
                Вы задумываетесь о принятии духовного учителя в будущем.
              </span>
              <span className={classes.Text}>
                Курс поможет вам лучше понять науку взаимоотношений с духовными учителями.{' '}
              </span>
            </div>
          </li>

          <li>
            <div className={classes.Content}>
              <span className={classes.StrongText}>
                Вы задумываетесь о принятии духовного учителя в будущем.
              </span>
              <span className={classes.Text}>
                Курс поможет вам лучше понять науку взаимоотношений с духовными учителями.{' '}
              </span>
            </div>
          </li>

          <li>
            <div className={classes.Content}>
              <span className={classes.StrongText}>Вы хотите получить 1-ю или 2-ю инициацию.</span>
              <span className={classes.Text}>
                Прохождение данного курса - одно из обязательных условий получения инициации у гуру
                ИСККОН. Прохождение данного курса - одно из обязательных условий получения инициации
                у гуру ИСККОН.
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
