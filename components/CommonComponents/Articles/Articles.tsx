import Link from 'next/link';
import classes from './Articles.module.scss';
import article_1 from '../../../images/articles/article_1.jpg';
import article_3 from '../../../images/articles/article_3.jpg';
import article_4 from '../../../images/articles/article_4.jpg';
import article_5 from '../../../images/articles/article_5.jpg';

export const Articles = (props) => {
  return (
    <div className={classes.Articles}>
      <div className={classes.Tile}>
        <div className={`${classes.TileItem} ${classes.TypeOne}`}>
          <Link href={'/navigator/blog_reading_item.php'}>
            <a>
              <figure>
                <div className={classes.ImgContainer}>
                  <div
                    className={classes.Img}
                    style={{ backgroundImage: `url(${article_1.src})` }}
                  />
                </div>

                <figcaption>
                  <div className={classes.Title}>
                    <span className={classes.Text}>
                      «Единый стандарт образования существует в форме книг Шрилы Прабхупады»
                    </span>
                    <span className={classes.Note}>
                      This is a paragraph with more information about something important.
                    </span>
                  </div>

                  {/* <div className="tags-blocks">*/}
                  {/*	<div className="tag-item"><a href="#">теги</a></div>*/}
                  {/*	<div className="tag-item"><a href="#">теги</a></div>*/}
                  {/*	<div className="tag-item"><a href="#">теги</a></div>*/}
                  {/*	<div className="tag-item"><a href="#">теги</a></div>*/}
                  {/*</div>*/}

                  <div className={classes.Time}>
                    Время чтения <span>~ 2 мин</span>
                  </div>
                </figcaption>
              </figure>
            </a>
          </Link>
        </div>

        <div className={`${classes.TileItem} ${classes.TypeTwo}`}>
          <Link href={'/navigator/blog_reading_item.php'}>
            <a>
              <figure>
                <div className={classes.ImgContainer}>
                  <div
                    className={classes.Img}
                    style={{ backgroundImage: `url(${article_3.src})` }}
                  />
                </div>

                <figcaption>
                  <div className={classes.Title}>
                    <span className={classes.Text}>
                      «Единый стандарт образования
                      <br /> существует в форме книг Шрилы Прабхупады»
                    </span>
                    <span className={classes.Note}>This is a paragraph with more</span>
                  </div>

                  {/* <div className="tags-blocks">*/}
                  {/*	<div className="tag-item"><a href="#">теги</a></div>*/}
                  {/*	<div className="tag-item"><a href="#">теги</a></div>*/}
                  {/*	<div className="tag-item"><a href="#">теги</a></div>*/}
                  {/*	<div className="tag-item"><a href="#">теги</a></div>*/}
                  {/*</div> */}

                  <div className={classes.Time}>
                    Время чтения <span>~ 2 мин</span>
                  </div>
                </figcaption>

                <div className={classes.Border} />
              </figure>
            </a>
          </Link>
        </div>
      </div>

      <div className={`${classes.Tile} ${classes.Reverse}`}>
        <div className={`${classes.TileItem} ${classes.TypeOne}`}>
          <Link href={'/navigator/blog_reading_item.php'}>
            <a>
              <figure>
                <div className={classes.ImgContainer}>
                  <div
                    className={classes.Img}
                    style={{ backgroundImage: `url(${article_4.src})` }}
                  />
                </div>

                <figcaption>
                  <div className={classes.Title}>
                    <span className={classes.Text}>
                      «Единый стандарт образования существует в форме книг Шрилы Прабхупады»
                    </span>
                    <span className={classes.Note}>
                      This is a paragraph with more information about something important.
                    </span>
                  </div>

                  {/* <div className="tags-blocks">*/}
                  {/*	<div className="tag-item"><a href="#">теги</a></div>*/}
                  {/*	<div className="tag-item"><a href="#">теги</a></div>*/}
                  {/*	<div className="tag-item"><a href="#">теги</a></div>*/}
                  {/*	<div className="tag-item"><a href="#">теги</a></div>*/}
                  {/*</div> */}

                  <div className={classes.Time}>
                    Время чтения <span>~ 2 мин</span>
                  </div>
                </figcaption>
              </figure>
            </a>
          </Link>
        </div>

        <div className={`${classes.TileItem} ${classes.TypeTwo}`}>
          <Link href={'/navigator/blog_reading_item.php'}>
            <a>
              <figure>
                <div className={classes.ImgContainer}>
                  <div
                    className={classes.Img}
                    style={{ backgroundImage: `url(${article_5.src})` }}
                  />
                </div>

                <figcaption>
                  <div className={classes.Title}>
                    <span className={classes.Text}>
                      «Единый стандарт образования существует в форме книг Шрилы Прабхупады»
                    </span>
                    <span className={classes.Note}>This is a paragraph with more</span>
                  </div>

                  {/*<div className="tags-blocks">*/}
                  {/*	<div className="tag-item"><a href="#">теги</a></div>*/}
                  {/*	<div className="tag-item"><a href="#">теги</a></div>*/}
                  {/*	<div className="tag-item"><a href="#">теги</a></div>*/}
                  {/*	<div className="tag-item"><a href="#">теги</a></div>*/}
                  {/*</div> */}

                  <div className={classes.Time}>
                    Время чтения <span>~ 2 мин</span>
                  </div>
                </figcaption>

                <div className={classes.Border} />
              </figure>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
