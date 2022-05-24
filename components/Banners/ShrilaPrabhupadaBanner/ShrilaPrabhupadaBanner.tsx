import classes from './ShrilaPrabhupadaBanner.module.scss';
import shrilaPrabhupada from '../../../images/shrila-prabhupada.jpg';

export const ShrilaPrabhupadaBanner = () => {
  return (
    <div className={classes.ShrilaPrabhupadaBanner}>
      <div className={classes.SiteWrap}>
        <figure>
          <div
            className={classes.Img}
            style={{ backgroundImage: `url(${shrilaPrabhupada.src})` }}
          />

          <figcaption>
            <div className={classes.Quote}>
              <div className={classes.Text}>
                Движение сознания Кришны предназначено <br />
                для обучения людей самостоятельно мыслящими <br />и компетентными во всех областях
                знаний <br />и деятельности.
              </div>

              <div className={classes.Reference}>
                А. Ч. Бхактиведанта Свами Прабхупада, <br />
                письмо Карандхаре от 22 декабря 1972
              </div>
            </div>

            <div className={classes.Signature} />
          </figcaption>
        </figure>
      </div>
    </div>
  );
};
