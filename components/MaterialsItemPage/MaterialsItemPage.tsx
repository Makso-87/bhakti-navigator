import classes from './MaterialsItemPage.module.scss';
import { Recommendations } from '../CommonComponents/Recommendations/Recommendations';
import { BannerNote } from '../Banners/BannerNote/BannerNote';
import { MaterialData } from './MaterialData/MaterialData';
import { Layout } from '../Layout';
import { Post } from '../../interfaces/interfaces';
import { formatVideoUrl, getLink } from '../../helpers/helpers';
import Link from 'next/link';
import { Tags } from '../CommonComponents/Tags/Tags';
import { BhaktiLevelsMap } from '../CommonComponents/BhaktiLevelsMap/BhaktiLevelsMap';

export const MaterialsItemPage = ({ dataPost }: { dataPost: Post }) => {
  const { materialACF, recordACF, title = 'заголовок' } = dataPost;
  const {
    author = {},
    themes,
    mainTheme,
    audioLink,
    onlineLink,
    description,
    downloadLink,
    bhaktiLevel,
  } = materialACF ?? recordACF ?? {};

  const videoAttrs = {
    materialType: 'video',
    url: onlineLink ?? false ? formatVideoUrl(onlineLink) : '#',
    description: audioLink ?? downloadLink ? '' : description,
  };

  const audioAttrs = {
    materialType: 'audio',
    audioLink,
    name: title,
    author: author?.title,
  };

  const downloadAttrs = {
    materialType: 'file',
    name: title,
    downloadLink,
    author: author?.title,
  };

  return (
    <Layout>
      <div className={classes.MaterialItemPage}>
        <div className={classes.MainScreen}>
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

                  {themes ? <Tags tags={themes} /> : null}

                  <div className={classes.Theme}>
                    <span className={classes.Name}>Тема: </span>
                    <span className={classes.Value}>{mainTheme?.title}</span>
                  </div>
                </div>
              </div>

              <div className={classes.RightSide}>
                <div className={classes.MaterialInfoExtended}>
                  <BhaktiLevelsMap bhaktiLevel={bhaktiLevel} />
                  {/*<div className={`${classes.Icon} ${classes.Sadhusanga}`} />*/}
                </div>
              </div>
            </div>

            {audioLink ?? downloadLink ? (
              <div className={classes.MaterialsContainer}>
                <div className={classes.MaterialsContainerTop}>
                  <div className={classes.Materials}>
                    {audioLink ? <MaterialData {...audioAttrs} /> : null}
                    {downloadLink ? <MaterialData {...downloadAttrs} /> : null}
                  </div>

                  <div
                    className={classes.Description}
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                </div>
              </div>
            ) : null}

            {onlineLink ? <MaterialData {...videoAttrs} /> : null}
          </div>
        </div>

        <Recommendations />
        <BannerNote marginNone={true} />
      </div>
    </Layout>
  );
};
