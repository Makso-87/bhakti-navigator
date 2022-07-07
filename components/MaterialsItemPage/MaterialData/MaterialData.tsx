import classes from './MaterialData.module.scss';
import cn from 'classnames';

export const MaterialData = (props) => {
  const { materialType } = props;

  const classesMaterialData = cn(`${classes.MaterialData}`, {
    [classes.Book]: materialType === 'book',
    [classes.File]: materialType === 'file',
    [classes.Audio]: materialType === 'audio',
    [classes.Video]: materialType === 'video',
  });

  return (
    <div className={classesMaterialData}>
      {materialType !== 'video' ? (
        <div className={classes.DownloadData}>
          <div className={classes.Icon} />
          <div className={classes.Name}>Здесь название материала</div>
          <div className={classes.FileInfo}>
            <span className={classes.Filename}>Парамананда Пури дас</span>

            {materialType === 'audio' ? (
              <span className={classes.MaterialDuration}>
                (<span>1:23:09</span>)
              </span>
            ) : null}
          </div>

          <div className={classes.DownloadButton}>
            <a href='#' />
          </div>
        </div>
      ) : null}

      <div className={classes.MaterialDescription}>
        Курс будет полезен всем без исключения - его проходят как совсем начинающие вайшнавы,
        которые еще только хотят найти духовного учителя, так и действующие дикша-гуру или члены
        Джи-Би-Си.
      </div>

      {materialType === 'video' ? (
        <div className={classes.VideoBox}>
          <div className={classes.VideoContainer}>
            <iframe
              src='https://www.youtube.com/embed/28XbF-Qdkko'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen={true}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};
