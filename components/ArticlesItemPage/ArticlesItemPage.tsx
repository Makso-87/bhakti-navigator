import classes from './ArticlesItemPage.module.scss';
import { Layout } from '../Layout';
import { Post, ServerData } from '../../interfaces/interfaces';
import { Tags } from '../CommonComponents/Tags/Tags';
import { clearContentFromAttrs } from '../../helpers/helpers';
import { MainContent } from './MainContent/MainContent';
import { Quote } from './Quote/Quote';
import { Note } from './Note/Note';

export const ArticlesItemPage = (props: ServerData) => {
  const { dataPost } = props;
  const article: Post = { ...dataPost };
  const { id, title, articleACF } = article;
  const {
    articleAuthor,
    articleMainImage,
    articleLead,
    readingTime,
    themes,
    contentPart1,
    contentPart2,
    contentPart3,
    contentPart4,
    contentPart5,
    quote1,
    quote2,
    note1,
    note2,
    articleSategory,
  } = articleACF ?? {};

  const pureContentPart1 = clearContentFromAttrs(contentPart1 ?? '');
  const pureContentPart2 = clearContentFromAttrs(contentPart2 ?? '');
  const pureContentPart3 = clearContentFromAttrs(contentPart3 ?? '');
  const pureContentPart4 = clearContentFromAttrs(contentPart4 ?? '');
  const pureContentPart5 = clearContentFromAttrs(contentPart5 ?? '');

  return (
    <Layout>
      <div className={classes.BlogArticleItemPage}>
        <div className={classes.Top}>
          <div className={classes.SiteWrap}>
            <h1>{title}</h1>

            <div className={classes.Info}>
              <div className={classes.InfoItem}>
                <div className={classes.Name}>Рубрика:</div>
                <div className={classes.Value}>{articleSategory ?? ''}</div>
              </div>

              <div className={classes.InfoItem}>
                <div className={classes.Name}>Время чтения:</div>
                <div className={classes.Value}>{readingTime ?? ''} мин.</div>
              </div>
            </div>

            {articleMainImage ? (
              <div className={classes.ImgContainer}>
                <img src={articleMainImage ? articleMainImage.sourceUrl : ''} alt='' />
              </div>
            ) : null}

            {articleAuthor !== '' ? (
              <div className={classes.Author}>
                <div className={classes.Name}>Автор: </div>
                <div className={classes.Value}>{articleAuthor ?? ''}</div>
              </div>
            ) : null}

            {articleLead ? (
              <div
                className={classes.ArticleLead}
                dangerouslySetInnerHTML={{ __html: clearContentFromAttrs(articleLead) }}
              />
            ) : null}
          </div>
        </div>

        <div className={classes.Middle}>
          <div className={classes.Content}>
            {contentPart1 ? <MainContent content={pureContentPart1} /> : null}

            {quote1 ? <Quote content={quote1} /> : null}

            {contentPart2 ? <MainContent content={pureContentPart2} /> : null}

            {note1 ? <Note content={note1} /> : null}

            {contentPart3 ? <MainContent content={pureContentPart3} /> : null}

            {quote2 ? <Quote content={quote2} /> : null}

            {contentPart4 ? <MainContent content={pureContentPart4} /> : null}

            {note2 ? <Note content={note2} /> : null}

            {contentPart5 ? <MainContent content={pureContentPart5} /> : null}
          </div>
        </div>

        <div className={classes.Bottom}>
          <div className={classes.SiteWrap}>
            <Tags tags={themes ?? []} />
          </div>
        </div>
      </div>
    </Layout>
  );
};
