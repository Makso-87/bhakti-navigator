import { observer } from 'mobx-react-lite';
import classes from './Articles.module.scss';
import { TileItem } from './ArticleItem/TileItem';
import { ArticlesProps, Post } from '../../../interfaces/interfaces';
import { postPair } from '../../../types/types';
import { ShowMore } from '../ShowMore/ShowMore';

export const Articles = observer(({ list = [] }: ArticlesProps) => {
  return (
    <div className={classes.Articles}>
      {list.length
        ? list.map((formattedPostPair: postPair, idx) => {
            return (
              <div key={idx} className={`${classes.Tile} ${idx % 2 === 0 ? '' : classes.Reverse}`}>
                {formattedPostPair.length
                  ? formattedPostPair.map((post: Post, index) => {
                      const { link, title, acf, id } = post;
                      const { article_main_image, article_lead, reading_time, themes } = acf;

                      const attrs = {
                        index,
                        link,
                        imgUrl: article_main_image,
                        title,
                        themes,
                        article_lead,
                        readingTime: reading_time,
                      };
                      return <TileItem key={id} {...attrs} />;
                    })
                  : null}
              </div>
            );
          })
        : null}

      {list.length ? <ShowMore text='Показать еще' /> : null}
    </div>
  );
});
