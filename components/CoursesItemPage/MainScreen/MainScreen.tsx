import classes from './MainScreen.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import { getLink } from '../../../helpers/helpers';

export const MainScreen = (props) => {
  const { course } = props;
  const { title, acf } = course;
  const { speaker, bhakti_level, duration, format, format_briefing, location, price } = acf;
  const linkToSpeakerPage = speaker ? getLink(speaker.link) : '#';

  const classesIcon = cn(classes.Icon, {
    [classes.BeforeShraddha]: bhakti_level.value === 'before_shraddha',
    [classes.Shraddha]: bhakti_level.value === 'shraddha',
    [classes.Sadhusanga]: bhakti_level.value === 'sadhu_sanga',
    [classes.BhadjanaKriya]: bhakti_level.value.includes('bhadjana_kriya'),
    [classes.AnarthaNivritti]: bhakti_level.value === 'anartha_nivritti',
  });

  const formatClasses = cn(classes.Item, {
    [classes.Online]: format.value === 'online',
    [classes.Live]: format.value === 'live',
  });

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
                  <a>{speaker.title}</a>
                </Link>
              </div>
              <div className={classes.Tags}>
                <div className={classes.TagItem}>Шрила Прабхупада</div>
                <div className={classes.TagItem}>ИСККОН</div>
                <div className={classes.TagItem}>ДИКША</div>
              </div>

              <div className={classes.TextWithIcons}>
                <div className={`${classes.Item} ${classes.Donations}`}>{price.label}</div>
                <div className={`${classes.Item} ${classes.Calendar}`}>
                  Длительность обучения {duration}
                </div>
                <div className={formatClasses}>{format.label}</div>
              </div>
            </div>
          </div>

          <div className={classes.RightSide}>
            <div className={classes.CourseInfoExtended}>
              <div className={classesIcon} />
              <div className={classes.Place}>{location}</div>
              <div className={classes.BriefDescription}>{format_briefing}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
