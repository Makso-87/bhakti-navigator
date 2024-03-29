import classes from './FAQList.module.scss';
import { FAQItem } from './FAQItem/FAQItem';
import { formatVideoUrl } from '../../../helpers/helpers';

export const FAQList = (props) => {
  const { list = [] } = props;

  return (
    <div className={classes.Grid}>
      {list.length
        ? list.map((item, index) => {
            const { title, faqACF } = item;
            const { author, videoUrl, videoDuration, previewImage } = faqACF;
            const attrs = {
              title,
              author,
              videoUrl: formatVideoUrl(videoUrl),
              videoDuration,
              imgUrl: previewImage.sourceUrl,
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
