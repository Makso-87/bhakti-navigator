import classes from './FAQList.module.scss';
import { FAQItem } from './FAQItem/FAQItem';
import { formatVideoUrl } from '../../../helpers/helpers';

export const FAQList = (props) => {
  const { list = [] } = props;

  return (
    <div className={classes.Grid}>
      {list.length
        ? list.map((item, index) => {
            const { title, author, video_url, video_duration, imgUrl } = item;
            const attrs = {
              title,
              author,
              video_url: formatVideoUrl(video_url),
              video_duration,
              imgUrl,
              index,
            };
            return (
              <div key={index} className={classes.Cell}>
                <FAQItem {...attrs} />
              </div>
            );
          })
        : null}
    </div>
  );
};
