import classes from './TeachersList.module.scss';

export const TeachersList = ({ list }) => {
  return (
    <div className={classes.Row}>
      {list.length
        ? list.map((item) => {
            const { id, title, link, city, teacher_photo, courses } = item;

            return (
              <div key={id} className={classes.Cell}>
                <a href={link}>
                  <div className={classes.Item}>
                    <figure>
                      <div className={classes.ImgContainer}>
                        <div
                          className={classes.Img}
                          style={{
                            backgroundImage: `url(${teacher_photo})`,
                          }}
                        />
                      </div>

                      <figcaption>
                        <div className={classes.Name}>{title}</div>

                        <div className={classes.InfoContainer}>
                          <div className={classes.Info}>
                            <div className={classes.InfoItem}>
                              <div className={classes.Key}>Город:</div>
                              <div className={classes.Value}>{city}</div>
                            </div>

                            <div className={classes.InfoItem}>
                              <div className={classes.Key}>Доступно:</div>
                              <div className={`${classes.Value} ${classes.Blue}`}>
                                {courses.length} курса
                              </div>
                            </div>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </a>
              </div>
            );
          })
        : null}
    </div>
  );
};
