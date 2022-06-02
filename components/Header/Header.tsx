import Link from 'next/link';
import cn from 'classnames';
import classes from './Header.module.scss';
import classesHeaderContent from './HeaderContent/HeaderContent.module.scss';
import logo from '../../images/icons/bhakti-navigator-logo.png';
import { observer } from 'mobx-react-lite';
import pagesStore from '../../store/pagesStore';
import topBannerMainLogo from '../../images/icons/top-banner-main-logo.png';
import topBannerSecondaryLogo from '../../images/icons/top-banner-secondary-logo.png';
import { HeaderContent } from './HeaderContent/HeaderContent';
import { useEffect } from 'react';
import { throttle } from '../../helpers/helpers';

export const Header = observer(() => {
  const { category } = pagesStore;
  const logoUrl = logo.src;

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
            style={{ backgroundImage: `url(${topBannerMainLogo.src})` }}
          />
          <div
            className={classes.SecondaryLogo}
            style={{ backgroundImage: `url(${topBannerSecondaryLogo.src})` }}
          />

          <div className={classes.BgMain} />
        </div>
      </div>

      <header className={classesHeader}>
        <HeaderContent />
      </header>

      <div className={`${classesHeader} ${classesHeaderContent.Popup}`}>
        <HeaderContent />
      </div>

      {category !== '' ? (
        <div className={classes.LeftSideBar}>
          <div className={classes.Logo}>
            <Link href=''>
              <a>
                <img src={logoUrl} alt='' />
              </a>
            </Link>
          </div>

          <menu>
            <li>
              <Link href='/catalog'>
                <a className="<?= $catalog ? 'active' : '' ?>">
                  <div className={`${classes.Icon} ${classes.Catalog}`} />
                  <span className='text'>Каталог</span>
                </a>
              </Link>
            </li>

            <li>
              <Link href='/test'>
                <a className="<?= $test ? 'active' : '' ?>">
                  <div className={`${classes.Icon} ${classes.Test}`} />
                  <span className='text'>Тест</span>
                </a>
              </Link>
            </li>

            <li>
              <Link href='#'>
                <a className="<?= $map ? 'active' : '' ?>">
                  <div className={`${classes.Icon} ${classes.Map}`} />
                  <span className='text'>Карта</span>
                </a>
              </Link>
            </li>

            <li>
              <Link href='/faq'>
                <a className="<?= $faq ? 'active' : '' ?>">
                  <div className={`${classes.Icon} ${classes.Question}`} />
                  <span className='text'>
                    Вопросы
                    <br /> и ответы
                  </span>
                </a>
              </Link>
            </li>

            <li>
              <Link href='/blog'>
                <a className="<?= $blog ? 'active' : '' ?>">
                  <div className={`${classes.Icon} ${classes.Blog}`} />
                  <span className='text'>Блог</span>
                </a>
              </Link>
            </li>
          </menu>
        </div>
      ) : null}
    </>
  );
});
