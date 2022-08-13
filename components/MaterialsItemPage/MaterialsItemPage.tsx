import classes from './MaterialsItemPage.module.scss';
import { Recommendations } from '../CommonComponents/Recommendations/Recommendations';
import { BannerNote } from '../Banners/BannerNote/BannerNote';
import { MaterialData } from './MaterialData/MaterialData';
import { Layout } from '../Layout';
import { Post } from '../../interfaces/interfaces';
import { formatVideoUrl, getLink } from '../../helpers/helpers';
import Link from 'next/link';

export const MaterialsItemPage = ({ dataPost }: { dataPost: Post }) => {
  const { acf = {}, title = 'заголовок' } = dataPost;
  const {
    author = {},
    theme,
    audio_link,
    online_link,
    description = '',
    download_link,
  } = acf || {};

  const audioAttrs = {
    materialType: 'audio',
    audio_link,
    description: 'Слушайте онлайн на Яндекс музыке',
    name: title,
    author: author?.title,
  };

  const downloadAttrs = {
    materialType: 'file',
    name: title,
    download_link,
    author: author?.title,
    description: 'Скачайте на своё устройство, чтобы не зависеть от интернета',
  };

  return (
    <Layout>
      <div className={classes.MaterialItemPage}>
        <div className={classes.MainScreen}>
          <div className={classes.BgSmallCircle} />

          <div className={classes.SiteWrap}>
            <div className={classes.Content}>
              <div className={classes.LeftSide}>
                <h1>{title}</h1>

                <div className={classes.MaterialInfoBlitz}>
                  <div className={classes.MaterialAuthor}>
                    <div className={classes.MaterialAuthor}>
                      <Link href={getLink(author?.link)}>
                        <a>{author?.title} </a>
                      </Link>
                    </div>
                  </div>

                  <div className={classes.Tags}>
                    <div className={classes.TagItem}>шастры</div>
                    <div className={classes.TagItem}>бхагавад-гита</div>
                    <div className={classes.TagItem}>шри-ишопанишад</div>
                    <div className={classes.TagItem}>священные писания</div>
                  </div>

                  <div className={classes.Theme}>
                    <span className={classes.Name}>Тема: </span>
                    <span className={classes.Value}>{theme}</span>
                  </div>
                </div>
              </div>

              <div className={classes.RightSide}>
                <div className={classes.MaterialInfoExtended}>
                  <div className={`${classes.Icon} ${classes.Sadhusanga}`} />
                </div>
              </div>
            </div>

            {online_link ? (
              <MaterialData
                materialType='video'
                url={formatVideoUrl(online_link)}
                description={description}
              />
            ) : null}

            {audio_link ? <MaterialData {...audioAttrs} /> : null}
            {download_link ? <MaterialData {...downloadAttrs} /> : null}
          </div>
        </div>

        <Recommendations />
        <BannerNote />
      </div>
    </Layout>
  );
};