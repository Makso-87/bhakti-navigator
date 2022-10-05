import classes from './BhaktiLevelsMap.module.scss';
import cn from 'classnames';
import { getUniqBhakyiLevels } from '../../../helpers/helpers';

export const BhaktiLevelsMap = ({ bhaktiLevel }) => {
  const bhaktiLevelsUnique = getUniqBhakyiLevels(bhaktiLevel);

  const getBhaktiLevel = (name) => {
    return bhaktiLevelsUnique.filter((item) => {
      const ddd = item?.bhaktiLevelACF?.value.includes(name);
      return item?.bhaktiLevelACF?.value === name || ddd;
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
    <div className={classes.BhaktiLevelsMap}>
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
  );
};
