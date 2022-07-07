import classes from './TeacherNote.module.scss';

export const TeacherNote = () => {
  return (
    <div className={classes.TeacherNote}>
      <div className={classes.Text}>
        Данный преподаватель может приехать в ваш город и провести выбранный курс для вашей ятры.{' '}
        <a href='#'>Связаться</a>
      </div>
    </div>
  );
};
