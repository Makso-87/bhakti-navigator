import classes from './CourseProgramScreen.module.scss';
import cn from 'classnames';

export const CourseProgramScreen = ({ program }: { program: [] }) => {
  return (
    <div className={classes.CourseProgramScreen}>
      <div className={classes.BgCircle} />

      <div className={classes.SiteWrap}>
        <div className={classes.Content}>
          <h2>Программа курса</h2>

          <div className={classes.ProgramList}>
            {program.length
              ? program.map((item) => {
                  const { id, title, acf } = item;
                  const { description = '', blitz_description = '' } = acf || {};
                  const classesProgramItem = cn(classes.ProgramItem, {
                    [classes.NoDescription]: description === '',
                  });

                  return (
                    <div key={id} className={classesProgramItem}>
                      <div className={classes.TopicBar}>
                        <div className={classes.Number} />

                        <div className={classes.Text}>
                          <span className={classes.Name}>{title}</span>

                          {blitz_description !== '' ? (
                            <span className={classes.BlitzDescription}>{blitz_description}</span>
                          ) : null}
                        </div>
                      </div>

                      {description !== '' ? (
                        <div
                          className={classes.TopicContent}
                          dangerouslySetInnerHTML={{ __html: description }}
                        />
                      ) : null}
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};
