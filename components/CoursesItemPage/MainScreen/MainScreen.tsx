import classes from './MainScreen.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import { getLink, getUniqBhakyiLevels } from '../../../helpers/helpers';
import { Tags } from '../../CommonComponents/Tags/Tags';
import { BhaktiLevelsMap } from '../../CommonComponents/BhaktiLevelsMap/BhaktiLevelsMap';

export const MainScreen = (props) => {
  const { course } = props;
  const { title, courseACF } = course;
  const {
    speaker,
    bhaktiLevel = [],
    duration,
    format = [],
    formatBriefing,
    location,
    price,
    themes = [],
  } = courseACF || {};
  const linkToSpeakerPage = speaker ? getLink(speaker.link) : '#';
  const { courseFormatACF, title: formatTitle } = format;
  const [, priceLabel] = price;

  const formatClasses = cn(classes.Item, {
    [classes.Online]: courseFormatACF.value === 'online',
    [classes.Live]: courseFormatACF.value === 'live',
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
                  <a>{speaker?.title}</a>
                </Link>
              </div>

              {themes ? <Tags tags={themes} /> : null}

              <div className={classes.TextWithIcons}>
                <div className={`${classes.Item} ${classes.Donations}`}>{priceLabel}</div>
                <div className={`${classes.Item} ${classes.Calendar}`}>
                  Длительность обучения {duration}
                </div>

                <div className={formatClasses}>{formatTitle}</div>
              </div>
            </div>
          </div>

          <div className={classes.RightSide}>
            <div className={classes.CourseInfoExtended}>
              <BhaktiLevelsMap bhaktiLevel={bhaktiLevel} />

              {/*<div className={classes.Icons}>*/}
              {/*  {bhaktiLevelsUnique?.length*/}
              {/*    ? bhaktiLevelsUnique.map((item) => {*/}
              {/*        const classesIcon = cn(classes.Icon, {*/}
              {/*          [classes.BeforeShraddha]: item?.acf?.value === 'before_shraddha',*/}
              {/*          [classes.Shraddha]: item?.acf?.value === 'shraddha',*/}
              {/*          [classes.Sadhusanga]: item?.acf?.value === 'sadhu_sanga',*/}
              {/*          [classes.BhadjanaKriya]: item?.acf?.value.includes('bhadjana_kriya'),*/}
              {/*          [classes.AnarthaNivritti]: item?.acf?.value === 'anartha_nivritti',*/}
              {/*          [classes.Medium]: bhaktiLevelsUnique.length > 2,*/}
              {/*          [classes.Small]: bhaktiLevelsUnique.length > 4,*/}
              {/*        });*/}

              {/*        return <div key={item.id} className={classesIcon} />;*/}
              {/*      })*/}
              {/*    : null}*/}
              {/*</div>*/}

              <div className={classes.Place}>{location}</div>
              <div className={classes.BriefDescription}>{formatBriefing}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
