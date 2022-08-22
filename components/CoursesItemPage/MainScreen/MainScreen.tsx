import classes from './MainScreen.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import { getLink } from '../../../helpers/helpers';

export const MainScreen = (props) => {
  const { course } = props;
  const { title, acf } = course;
  const {
    speaker,
    bhakti_level,
    duration,
    format,
    format_briefing,
    location,
    price,
    themes = [],
  } = acf || {};
  const linkToSpeakerPage = speaker ? getLink(speaker.link) : '#';

  const formatClasses = cn(classes.Item, {
    [classes.Online]: format?.value === 'online',
    [classes.Live]: format?.value === 'live',
  });

  const bhaktiLevelsWithoutBhadjanaKriya = bhakti_level.filter(
    (item) => !item?.acf?.value?.includes('bhadjana_kriya')
  );

  const [bhadjanaKriya] = bhakti_level.filter((item) =>
    item?.acf?.value?.includes('bhadjana_kriya')
  );

  const bhaktiLevelsUnique = [bhadjanaKriya, ...bhaktiLevelsWithoutBhadjanaKriya].filter(
    (item) => item
  );

  return (
    <div className={classes.MainScreen}>
      <div className={classes.BgBigCircle} />
      <div className={classes.BgSmallCircle} />

      <div className={classes.SiteWrap}>
        <div className={classes.Content}>
          <div className={classes.LeftSide}>
            <h1>{title}</h1>

            <div className={classes.CourseInfoBlitz}>
              <div className={classes.CourseSpeaker}>
                <Link href={linkToSpeakerPage}>
                  <a>{speaker?.title}</a>
                </Link>
              </div>

              <div className={classes.Tags}>
                {themes.length
                  ? themes.map((item) => {
                      return <div className={classes.TagItem}>{item?.title}</div>;
                    })
                  : null}
              </div>

              <div className={classes.TextWithIcons}>
                <div className={`${classes.Item} ${classes.Donations}`}>{price?.label}</div>
                <div className={`${classes.Item} ${classes.Calendar}`}>
                  Длительность обучения {duration}
                </div>

                <div className={formatClasses}>{format?.label}</div>
              </div>
            </div>
          </div>

          <div className={classes.RightSide}>
            <div className={classes.CourseInfoExtended}>
              <div className={classes.Icons}>
                {bhaktiLevelsUnique?.length
                  ? bhaktiLevelsUnique.map((item) => {
                      const classesIcon = cn(classes.Icon, {
                        [classes.BeforeShraddha]: item?.acf?.value === 'before_shraddha',
                        [classes.Shraddha]: item?.acf?.value === 'shraddha',
                        [classes.Sadhusanga]: item?.acf?.value === 'sadhu_sanga',
                        [classes.BhadjanaKriya]: item?.acf?.value.includes('bhadjana_kriya'),
                        [classes.AnarthaNivritti]: item?.acf?.value === 'anartha_nivritti',
                        [classes.Medium]: bhaktiLevelsUnique.length > 2,
                        [classes.Small]: bhaktiLevelsUnique.length > 4,
                      });

                      return <div key={item.id} className={classesIcon} />;
                    })
                  : null}
              </div>
              <div className={classes.Place}>{location}</div>
              <div className={classes.BriefDescription}>{format_briefing}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
