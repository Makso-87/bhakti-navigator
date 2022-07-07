import classes from './LessonsFormat.module.scss';

export const LessonsFormat = (props) => {
  return (
    <div className={classes.LessonsFormat}>
      <div className={classes.SiteWrap}>
        <h2>Формат занятий</h2>

        <ul className={classes.FormatsList}>
          <li>Формат такой</li>
          <li>Формат такой</li>
          <li>Формат такой</li>
          <li>Формат такой</li>
        </ul>
      </div>
    </div>
  );
};
