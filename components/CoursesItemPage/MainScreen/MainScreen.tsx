import classes from './MainScreen.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import { getLink, getUniqBhakyiLevels } from '../../../helpers/helpers';
import { Tags } from '../../CommonComponents/Tags/Tags';

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

  const bhaktiLevelsUnique = getUniqBhakyiLevels(bhakti_level);

  const getBhaktiLevel = (name) => {
    return bhaktiLevelsUnique.filter((item) => {
      const ddd = item?.acf?.value.includes(name);
      return item?.acf?.value === name || ddd;
    });
  };

  const classesBeforeShraddha = cn(classes.Point, classes.BeforeShraddha, {
    [classes.Active]: getBhaktiLevel('before_shraddha').length,
  });

  const classesShraddha = cn(classes.Point, classes.Shraddha, {
    [classes.Active]: getBhaktiLevel('shraddha').length,
  });

  const classesSadhusanga = cn(classes.Point, classes.Sadhusanga, {
    [classes.Active]: getBhaktiLevel('sadhu_sanga').length,
  });

  const classesBhadjanaKriya = cn(classes.Point, classes.BhadjanaKriya, {
    [classes.Active]: getBhaktiLevel('bhadjana_kriya').length,
  });

  const classesAnarthaNivritti = cn(classes.Point, classes.AnarthaNivritti, {
    [classes.Active]: getBhaktiLevel('anartha_nivritti').length,
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
              <div className={classes.Map}>
                <div className={classesBeforeShraddha}>
                  <div className={classes.Text}>Знакомство</div>
                </div>

                <div className={classesShraddha}>
                  <div className={classes.Text}>Шраддха</div>
                </div>

                <div className={classesSadhusanga}>
                  <div className={classes.Text}>Садху-санга</div>
                </div>

                <div className={classesBhadjanaKriya}>
                  <div className={classes.Text}>Бхаджана-крия</div>
                </div>

                <div className={classesAnarthaNivritti}>
                  <div className={classes.Text}>Анартха-нивритти</div>
                </div>

                <div className={`${classes.Point} ${classes.Nistha}`}>
                  <div className={classes.Text}>Ништха</div>
                </div>

                <div className={`${classes.Point} ${classes.Ruchi}`}>
                  <div className={classes.Text}>Ручи</div>
                </div>

                <div className={`${classes.Point} ${classes.Asakti}`}>
                  <div className={classes.Text}>Асакти</div>
                </div>

                <div className={`${classes.Point} ${classes.Bhava}`}>
                  <div className={classes.Text}>Бхава</div>
                </div>

                <div className={`${classes.Point} ${classes.Prema}`}>
                  <div className={classes.Text}>Према</div>
                </div>
              </div>

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
              <div className={classes.BriefDescription}>{format_briefing}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
