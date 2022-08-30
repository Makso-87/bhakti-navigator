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
  const { id, title, acf = {} } = article;
  const {
    article_author = '',
    article_main_image,
    article_lead = '',
    reading_time = '',
    themes,
    content_part_1 = '',
    content_part_2 = '',
    content_part_3 = '',
    content_part_4 = '',
    content_part_5 = '',
    quote_1 = '',
    quote_2 = '',
    note_1 = '',
    note_2 = '',
    article_sategory = '',
  } = acf || {};

  const pureContentPart1 = clearContentFromAttrs(content_part_1);
  const pureContentPart2 = clearContentFromAttrs(content_part_2);
  const pureContentPart3 = clearContentFromAttrs(content_part_3);
  const pureContentPart4 = clearContentFromAttrs(content_part_4);
  const pureContentPart5 = clearContentFromAttrs(content_part_5);

  return (
    <Layout>
      <div className={classes.BlogArticleItemPage}>
        <div className={classes.Top}>
          <div className={classes.SiteWrap}>
            <h1>{title}</h1>

            <div className={classes.Info}>
              <div className={classes.InfoItem}>
                <div className={classes.Name}>Рубрика:</div>
                <div className={classes.Value}>{article_sategory}</div>
              </div>

              <div className={classes.InfoItem}>
                <div className={classes.Name}>Время чтения:</div>
                <div className={classes.Value}>{reading_time}</div>
              </div>
            </div>

            {article_main_image ? (
              <div className={classes.ImgContainer}>
                <img src={article_main_image} alt='' />
              </div>
            ) : null}

            {article_author !== '' ? (
              <div className={classes.Author}>
                <div className={classes.Name}>Автор</div>
                <div className={classes.Value}>{article_author}</div>
              </div>
            ) : null}

            {article_lead !== '' ? (
              <div
                className={classes.ArticleLead}
                dangerouslySetInnerHTML={{ __html: clearContentFromAttrs(article_lead) }}
              />
            ) : null}
          </div>
        </div>

        <div className={classes.Middle}>
          <div className={classes.Content}>
            {content_part_1 !== '' ? <MainContent content={pureContentPart1} /> : null}

            {quote_1 !== '' ? <Quote content={quote_1} /> : null}

            {content_part_2 !== '' ? <MainContent content={pureContentPart2} /> : null}

            {note_1 !== '' ? <Note content={note_1} /> : null}

            {content_part_3 !== '' ? <MainContent content={pureContentPart3} /> : null}

            {quote_2 !== '' ? <Quote content={quote_2} /> : null}

            {content_part_4 !== '' ? <MainContent content={pureContentPart4} /> : null}

            {note_2 !== '' ? <Note content={note_2} /> : null}

            {content_part_5 !== '' ? <MainContent content={pureContentPart5} /> : null}
          </div>
        </div>

        <div className={classes.Bottom}>
          <div className={classes.SiteWrap}>
            <Tags tags={themes} />
          </div>
        </div>
      </div>
    </Layout>
  );
};
