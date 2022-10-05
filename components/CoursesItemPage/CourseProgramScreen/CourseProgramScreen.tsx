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
                  const { id, title, courseProgramItemACF } = item;
                  const { description = '', blitzDescription = '' } = courseProgramItemACF || {};
                  const classesProgramItem = cn(classes.ProgramItem, {
                    [classes.NoDescription]: description === '' || description === null,
                  });

                  return (
                    <div key={id} className={classesProgramItem}>
                      <div className={classes.TopicBar}>
                        <div className={classes.Number} />

                        <div className={classes.Text}>
                          <span className={classes.Name}>{title}</span>

                          {blitzDescription && blitzDescription !== '' ? (
                            <span className={classes.BlitzDescription}>{blitzDescription}</span>
                          ) : null}
                        </div>
                      </div>

                      {description && description !== '' ? (
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
