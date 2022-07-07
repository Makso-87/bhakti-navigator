import classes from './MaterialsItemPage.module.scss';
import { Recommendations } from '../CommonComponents/Recommendations/Recommendations';
import { BannerNote } from '../Banners/BannerNote/BannerNote';
import { MaterialData } from './MaterialData/MaterialData';
import { Layout } from '../Layout';

export const MaterialsItemPage = (props) => {
  return (
    <Layout>
      <div className={classes.MaterialItemPage}>
        <div className={classes.MainScreen}>
          <div className={classes.BgSmallCircle} />

          <div className={classes.SiteWrap}>
            <div className={classes.Content}>
              <div className={classes.LeftSide}>
                <h1>Здесь название материала</h1>

                <div className={classes.MaterialInfoBlitz}>
                  <div className={classes.MaterialAuthor}>Парамананда Пури дас</div>

                  <div className={classes.Tags}>
                    <div className={classes.TagItem}>Шрила Прабхупада</div>
                    <div className={classes.TagItem}>ИСККОН</div>
                    <div className={classes.TagItem}>ДИКША</div>
                  </div>

                  <div className={classes.Theme}>
                    <span className={classes.Name}>Тема: </span>
                    <span className={classes.Value}>Миссия ИСККОН</span>
                  </div>
                </div>
              </div>

              <div className={classes.RightSide}>
                <div className={classes.MaterialInfoExtended}>
                  <div className={`${classes.Icon} ${classes.Sadhusanga}`} />
                </div>
              </div>
            </div>

            <MaterialData materialType='book' />
          </div>
        </div>

        <Recommendations />
        <BannerNote />
      </div>
    </Layout>
  );
};
