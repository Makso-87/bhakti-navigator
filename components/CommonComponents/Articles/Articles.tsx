import { observer } from 'mobx-react-lite';
import classes from './Articles.module.scss';
import { TileItem } from './ArticleItem/TileItem';
import dataStore from '../../../store/dataStore';
import { ArticlesProps, Media, Post } from '../../../interfaces/interfaces';
import { getFormattedPosts, getMediaData } from '../../../helpers/helpers';
import { pairsFormattedPosts, postPair } from '../../../types/types';

export const Articles = observer((props: ArticlesProps) => {
  const { dataMedia }: { dataMedia: Media[] } = dataStore;
  const { posts, tileMaxCount }: { posts: Post[]; tileMaxCount: number } = props;
  const formattedPosts: pairsFormattedPosts = getFormattedPosts(posts);
  const allowedPosts = formattedPosts.filter((postPair: postPair, index) => index < tileMaxCount);

  return (
    <div className={classes.Articles}>
      {allowedPosts.length
        ? allowedPosts.map((formattedPostPair: postPair, idx) => {
            return (
              <div key={idx} className={`${classes.Tile} ${idx % 2 === 0 ? '' : classes.Reverse}`}>
                {formattedPostPair.length
                  ? formattedPostPair.map((post: Post, index) => {
                      const { link, title, acf, id } = post;
                      const imgId = acf.article_main_image;
                      const media = getMediaData(dataMedia, imgId);
                      const attrs = {
                        index,
                        link,
                        imgUrl: media.source_url,
                        title: title.rendered,
                        note: acf.title_additional_text,
                        readingTime: acf.reading_time,
                      };
                      return <TileItem key={id} {...attrs} />;
                    })
                  : null}
              </div>
            );
          })
        : null}
    </div>
  );
});
