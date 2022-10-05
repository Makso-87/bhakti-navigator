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
                      const { link, title, articleACF, id } = post;
                      const { articleMainImage, articleLead, readingTime, themes } = articleACF;

                      const attrs = {
                        index,
                        link,
                        imgUrl: articleMainImage.sourceUrl,
                        title,
                        themes,
                        articleLead,
                        readingTime,
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
