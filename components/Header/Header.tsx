import Link from 'next/link';
import cn from 'classnames';
import classes from './Header.module.scss';
import classesHeaderContent from './HeaderContent/HeaderContent.module.scss';
import logo from '../../images/icons/bhakti-navigator-logo.png';
import { observer } from 'mobx-react-lite';
import pagesStore from '../../store/pagesStore';
import logoGitaNagari from '../../images/icons/logo-gita-nagari-white.png';
import logoCoskrWhite from '../../images/icons/logo-coskr-white.png';
import { HeaderContent } from './HeaderContent/HeaderContent';
import { useEffect } from 'react';
import { throttle } from '../../helpers/helpers';

export const Header = observer(() => {
  const { category, currentPage } = pagesStore;
  const logoUrl = logo.src;
  console.log(currentPage);

  const classesHeader = cn(classesHeaderContent.Header, {
    [classesHeaderContent.FunctionalPage]: category !== '',
  });

  useEffect(() => {
    const headerElement: HTMLElement = document.querySelector(`.${classesHeaderContent.Header}`);
    const headerPopupElement: HTMLElement = document.querySelector(
      `.${classesHeaderContent.Header}.${classesHeaderContent.Popup}`
    );
    const topBannerElement: HTMLElement = document.querySelector(`.${classes.TopBanner}`);
    const leftSideBarElement: HTMLElement = document.querySelector(`.${classes.LeftSideBar}`);
    const isFunctionalPage = headerElement.classList.contains(
      `${classesHeaderContent.FunctionalPage}`
    );

    const scrollHandler = () => {
      const scrollTop = window.scrollY;
      const bannerHeight = topBannerElement.clientHeight;
      const headerHeight = headerElement.clientHeight;
      const showTriggerValue = bannerHeight + headerHeight;

      if (scrollTop > showTriggerValue) {
        headerPopupElement.classList.add(`${classesHeaderContent.Show}`);
      } else {
        headerPopupElement.classList.remove(`${classesHeaderContent.Show}`);
      }

      if (scrollTop > bannerHeight) {
        if (isFunctionalPage) {
          leftSideBarElement.style.top = '0';
        }
      } else {
        if (isFunctionalPage) {
          leftSideBarElement.style.top = bannerHeight - scrollTop + 'px';
        }
      }
    };

    window.onscroll = isFunctionalPage ? scrollHandler : throttle(scrollHandler, 250);
  }, []);

  return (
    <>
      <div className={classes.TopBanner}>
        <div className={classes.SiteWrap}>
          <div
            className={classes.MainLogo}
            style={{ backgroundImage: `url(${logoGitaNagari.src})` }}
          />
          <div
            className={classes.SecondaryLogo}
            style={{ backgroundImage: `url(${logoCoskrWhite.src})` }}
          />

          <div className={classes.Text}>
            <span className={classes.Title}>ГИТА-НАГАРИ</span>
            <span className={classes.Color}>в сотрудничестве</span>
            <span className={classes.Note}>с отделом вайшнавского образования ЦОСКР</span>
          </div>

          <div className={classes.BgMain} />
        </div>
      </div>

      <header className={classesHeader}>
        <HeaderContent />
      </header>

      <div className={`${classesHeader} ${classesHeaderContent.Popup}`}>
        <HeaderContent logo={true} />
      </div>

      {category !== '' ? (
        <div className={classes.LeftSideBar}>
          <div className={classes.Logo}>
            <Link href='/'>
              <a>
                <img src={logoUrl} alt='' />
              </a>
            </Link>
          </div>

          <menu>
            <li>
              <Link href='/catalog/courses'>
                <a className={category === 'Каталог' ? classes.Active : ''}>
                  <div className={`${classes.Icon} ${classes.Catalog}`} />
                  <span className={classes.Text}>Каталог</span>
                </a>
              </Link>
            </li>

            <li>
              <Link href='/test'>
                <a className={category === 'Тест' ? classes.Active : ''}>
                  <div className={`${classes.Icon} ${classes.Test}`} />
                  <span className={classes.Text}>Тест</span>
                </a>
              </Link>
            </li>

            <li>
              <Link href='#'>
                <a className={category === 'Карта' ? classes.Active : ''}>
                  <div className={`${classes.Icon} ${classes.Map}`} />
                  <span className={classes.Text}>Карта</span>
                </a>
              </Link>
            </li>

            <li>
              <Link href='/faq'>
                <a className={category === 'Вопросы и ответы' ? classes.Active : ''}>
                  <div className={`${classes.Icon} ${classes.Question}`} />
                  <span className={classes.Text}>
                    Вопросы
                    <br /> и ответы
                  </span>
                </a>
              </Link>
            </li>

            <li>
              <Link href='/blog'>
                <a className={category === 'Блог' ? classes.Active : ''}>
                  <div className={`${classes.Icon} ${classes.Blog}`} />
                  <span className={classes.Text}>Блог</span>
                </a>
              </Link>
            </li>
          </menu>
        </div>
      ) : null}
    </>
  );
});
