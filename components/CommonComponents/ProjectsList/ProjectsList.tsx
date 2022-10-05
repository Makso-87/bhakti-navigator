import classes from './ProjectsList.module.scss';
import Link from 'next/link';

export const ProjectsList = (props) => {
  const { list } = props;

  return (
    <div className={classes.Row}>
      {list.length
        ? list.map((item, index) => {
            const { link, logo, title, format, city, site } = item;
            const [, formatLabel] = format;

            return (
              <div key={index} className={classes.Cell}>
                <Link href={'/catalog/projects/[name]'} as={link}>
                  <a>
                    <div className={classes.Item}>
                      <figure>
                        <div className={classes.ImgContainer}>
                          <div
                            className={classes.Img}
                            style={{ backgroundImage: `url(${logo})` }}
                          />
                        </div>

                        <figcaption>
                          <div className={classes.Name}>{title}</div>

                          <div className={classes.InfoContainer}>
                            <div className={classes.Info}>
                              <div className={classes.InfoItem}>
                                <div className={classes.Key}>Формат:</div>
                                <div className={classes.Value}>{formatLabel}</div>
                              </div>

                              <div className={classes.InfoItem}>
                                <div className={classes.Key}>Город:</div>
                                <div className={classes.Value}>{city}</div>
                              </div>
                            </div>

                            <div className={classes.Address}>{site}</div>
                            <div className={classes.More}>Подробнее</div>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  </a>
                </Link>
              </div>
            );
          })
        : null}
    </div>
  );
};
