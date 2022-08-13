import classes from './MaterialData.module.scss';
import cn from 'classnames';
import { formatVideoUrl, getLink, getLinksList } from '../../../helpers/helpers';

export const MaterialData = (props) => {
  const {
    materialType,
    url = '#',
    description = '',
    name = 'Духовные знания',
    author = 'Старший преданный',
    audio_link = '#',
    download_link = '#',
  } = props;

  const classesMaterialData = cn(`${classes.MaterialData}`, {
    [classes.Book]: materialType === 'book',
    [classes.File]: materialType === 'file',
    [classes.Audio]: materialType === 'audio',
    [classes.Video]: materialType === 'video',
  });

  const linksList = getLinksList(url);

  const mediaData = {
    book: () => (
      <>
        <div className={classes.DownloadData}>
          <div className={classes.Icon} />
          <div className={classes.Name}>{name}</div>
          <div className={classes.FileInfo}>
            <span className={classes.Filename}>{author}</span>
          </div>

          <div className={classes.DownloadButton}>
            <a href={download_link} target='_blank' />
          </div>
        </div>

        <div
          className={classes.MaterialDescription}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </>
    ),
    file: () => (
      <>
        <a
          href={download_link}
          target='_blank'
          className={`${classes.DownloadData} ${classes.Link}`}
        >
          <div className={classes.Icon} />
          <div className={classes.Name}>{name}</div>
          <div className={classes.FileInfo}>
            <span className={classes.Filename}>{author}</span>
          </div>

          <div className={classes.DownloadButton} />
        </a>

        <div
          className={classes.MaterialDescription}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </>
    ),
    audio: () => (
      <>
        <a href={audio_link} target='_blank' className={`${classes.DownloadData} ${classes.Link}`}>
          <div className={classes.Icon} />
          <div className={classes.Name}>{name}</div>
          <div className={classes.FileInfo}>
            <span className={classes.Filename}>{author}</span>

            {/*{materialType === 'audio' ? (*/}
            {/*  <span className={classes.MaterialDuration}>*/}
            {/*    (<span>1:23:09</span>)*/}
            {/*  </span>*/}
            {/*) : null}*/}
          </div>
        </a>

        <div
          className={classes.MaterialDescription}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </>
    ),
    video: () => (
      <>
        <div
          className={classes.MaterialDescription}
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {linksList?.length
          ? linksList.map((item) => (
              <div className={`${classes.VideoBox} ${classes.Item}`}>
                <div className={classes.VideoContainer}>
                  <iframe
                    src={formatVideoUrl(item)}
                    title='YouTube video player'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen={true}
                  />
                </div>
              </div>
            ))
          : null}
      </>
    ),
  };

  return <div className={classesMaterialData}>{mediaData[materialType]()}</div>;
};
