import cn from 'classnames';
import Link from 'next/link';
import classes from './Footer.module.scss';
import bhaktiNavigatorLogo from '../../images/icons/bhakti-navigator-logo.png';
import logoCoskr from '../../images/icons/logo-coskr.png';
import insta from '../../images/icons/insta.svg';
import telegram from '../../images/icons/telegram.png';
import youtubeBlack from '../../images/icons/youtube-black.svg';
import pagesStore from '../../store/pagesStore';

export const Footer = () => {
  const { category } = pagesStore;

  const classesFooter = cn(classes.Footer, {
    [classes.FunctionalPage]: category !== '',
  });

  return (
    <footer className={classesFooter}>
      <div className={classes.Top}>
        <div className={classes.SiteWrap}>
          <div className={classes.Row}>
            <div className={`${classes.Cell} ${classes.FirstCell}`}>
              <div className={classes.Logo}>
                <Link href='/'>
                  <a>
                    <div
                      className={classes.Img}
                      style={{ backgroundImage: `url(${bhaktiNavigatorLogo.src})` }}
                    />
                  </a>
                </Link>

                <Link href='https://xn--j1ahhcx.xn--p1ai/'>
                  <a target='_blank'>
                    <div
                      className={classes.Img}
                      style={{ backgroundImage: `url(${logoCoskr.src})` }}
                    />
                  </a>
                </Link>
              </div>

              <div className={classes.Name}>ISKCON</div>
            </div>

            <div className={`${classes.Cell} ${classes.SecondCell}`}>
              <div className={classes.Text}>
                Bhakti-navigator.ru - портал, созданный проектом «Гита-нагари» совместно с Отделом
                вайшнавского образования ЦОСКР. Мы помогаем преданным разобраться в теме духовного
                образования и наставничества для осознанного продвижения по пути бхакти.
              </div>

              <div className={classes.Buttons}>
                <div className={classes.Social}>
                  <div className={classes.SocialItem}>
                    <Link href='https://t.me/bhaktinavigator'>
                      <a target='_blank'>
                        <div
                          className={classes.Img}
                          style={{ backgroundImage: `url(${telegram.src})` }}
                        />
                      </a>
                    </Link>
                  </div>

                  {/*<div className={classes.SocialItem}>*/}
                  {/*  <Link href='#'>*/}
                  {/*    <a>*/}
                  {/*      <div*/}
                  {/*        className={classes.Img}*/}
                  {/*        style={{ backgroundImage: `url(${insta.src})` }}*/}
                  {/*      />*/}
                  {/*    </a>*/}
                  {/*  </Link>*/}
                  {/*</div>*/}

                  {/*<div className={classes.SocialItem}>*/}
                  {/*  <Link href='#'>*/}
                  {/*    <a>*/}
                  {/*      <div*/}
                  {/*        className={classes.Img}*/}
                  {/*        style={{ backgroundImage: ` url(${youtubeBlack.src})` }}*/}
                  {/*      />*/}
                  {/*    </a>*/}
                  {/*  </Link>*/}
                  {/*</div>*/}
                </div>

                <div className={classes.Donation}>
                  <Link href='#'>
                    <a>Поддержать проект</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`${classes.Cell} ${classes.ThirdCell}`}>
              <div className={classes.Links}>
                <div className={classes.LinksCell}>
                  <div className={classes.List}>
                    <div className={classes.Name}>Разделы</div>

                    <ul>
                      <li>
                        <Link href='/catalog/courses'>
                          <a>Каталог</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='#'>
                          <a>Дорожная карта</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/faq'>
                          <a>Вопросы и ответы</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/blog/articles'>
                          <a>Блог</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/test'>
                          <a>Тест</a>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className={`${classes.BottomInfo} ${classes.Rights}`}>
                    {/*Все права защищены*/}
                  </div>
                </div>

                <div className={classes.LinksCell}>
                  <div className={classes.List}>
                    <div className={classes.Name}>О проекте</div>

                    <ul>
                      <li>
                        <Link href='#'>
                          <a>Чем мы занимаемся?</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='#'>
                          <a>О «Гита-нагари»</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='#'>
                          <a>Наша команда</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='#'>
                          <a>Связаться с нами</a>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className={`${classes.BottomInfo} ${classes.Policy}`}>
                    <Link href='#'>
                      <a>Политика конфиденциальности</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.Bottom}>
        <div className={classes.Text}>
          Данный информационный ресурс и опубликованная на нем информация созданы в целях духовного
          просвещения действующих последователей Движения сознания Кришны и не предназначены для
          осуществления миссионерской деятельности.
        </div>
      </div>
    </footer>
  );
};
