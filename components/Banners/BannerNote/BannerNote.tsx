import classes from './BannerNote.module.scss';
import bannerSm from '../../../images/banner-sm.png';
import cn from 'classnames';

export const BannerNote = ({ marginNone = false }) => {
  const classesBannerNote = cn(classes.BannerNote, {
    [classes.MarginNone]: marginNone,
  });
  return (
    <div className={classesBannerNote}>
      <div className={classes.SiteWrap}>
        <div className={classes.Content}>
          <div className={classes.Image} style={{ backgroundImage: `url(${bannerSm.src})` }} />

          <div className={classes.Info}>
            <div className={classes.Icon} />

            <div className={classes.Text}>
              <p>
                Портал <a href='#'>bhakti-navigator.ru</a> не является организатором представленных
                программ, а также представителем конкретных преподавателей или наставников.
                Материалы каталога отбираются по согласованию с местным руководством ИСККОН, однако
                носят информационный характер. Обо всех подробностях участия в той или иной
                программе уточняйте непосредственно у их организаторов.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
