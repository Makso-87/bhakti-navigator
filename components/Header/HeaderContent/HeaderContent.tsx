import Link from 'next/link';
import classes from './HeaderContent.module.scss';
import mainLogo from '../../../images/icons/bhakti-navigator-logo.png';
import pagesStore from '../../../store/pagesStore';
import UserStore from '../../../store/userStore';
import { AccountData } from './AccountData/AccountData';
import { observer } from 'mobx-react-lite';
import { HeaderContentProps } from '../../../interfaces/interfaces';
const logoUrl = mainLogo.src;

export const HeaderContent = observer(({ logo = false }: HeaderContentProps) => {
  const { category, secondaryTabBar, currentPage } = pagesStore;

  return (
    <>
      <div className={classes.SiteWrap}>
        {category === '' ? (
          <div className={classes.Left}>
            <div className={classes.Logo}>
              {logo ? (
                <Link href='/'>
                  <a>
                    <div className={classes.Img} style={{ backgroundImage: `url(${logoUrl})` }} />
                  </a>
                </Link>
              ) : (
                <div className={classes.Img} />
              )}
            </div>

            <menu>
              <li>
                <Link href='/catalog/courses'>
                  <a>Каталог</a>
                </Link>
              </li>
              <li>
                <Link href='/test'>
                  <a>Пройти тест</a>
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <a>Карта</a>
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
            </menu>
          </div>
        ) : null}

        {category !== '' ? <div className={classes.CategoryName}>{category}</div> : null}

        <div className={classes.Right}>
          <div className={classes.Controls}>
            {UserStore.token === '' ? (
              <div className={classes.Buttons}>
                <div className={classes.SearchTrigger} />

                <div className={classes.SignIn}>
                  <Link href='/authorization?auth=sign_in'>
                    <a>Вход</a>
                  </Link>
                </div>

                <div className={classes.SignUp}>
                  <Link href='/authorization?auth=sign_up'>
                    <a>Регистрация</a>
                  </Link>
                </div>
              </div>
            ) : (
              <AccountData />
            )}
          </div>
        </div>

        <div className={classes.SearchContainer}>
          <div className={classes.Search}>
            <div className={classes.InputBox}>
              <div className={classes.Icon} />
              <input type='text' placeholder='Поиск' />
            </div>

            <div className={classes.Close}>×</div>
          </div>
        </div>
      </div>

      {secondaryTabBar && category === 'Каталог' ? (
        <div className={classes.SecondaryPagesTabContainer}>
          <ul className={classes.TabBar}>
            <li className={classes.TabBarItem}>
              <Link href='/catalog/courses'>
                <a className={currentPage === 'courses' ? classes.Active : ''}>Курсы</a>
              </Link>
            </li>

            <li className={classes.TabBarItem}>
              <Link href='/catalog/projects'>
                <a className={currentPage === 'projects' ? classes.Active : ''}>Проекты</a>
              </Link>
            </li>

            <li className={classes.TabBarItem}>
              <Link href='/catalog/teachers'>
                <a className={currentPage === 'teachers' ? classes.Active : ''}>Преподаватели</a>
              </Link>
            </li>

            <li className={classes.TabBarItem}>
              <Link href='/catalog/materials'>
                <a className={currentPage === 'materials' ? classes.Active : ''}>Материалы</a>
              </Link>
            </li>

            <li className={classes.TabBarItem}>
              <Link href='/catalog/records'>
                <a className={currentPage === 'records' ? classes.Active : ''}>Курсы в записи</a>
              </Link>
            </li>
          </ul>
        </div>
      ) : null}

      {secondaryTabBar && category === 'Блог' ? (
        <div className={classes.SecondaryPagesTabContainer}>
          <ul className={classes.TabBar}>
            <li className={classes.TabBarItem}>
              <Link href='/blog/points_above_i'>
                <a className="<?= $blog_page == 'watching' ? 'active' : '' ?>">
                  Точки над &laquo;i&raquo;
                </a>
              </Link>
            </li>

            <li className={classes.TabBarItem}>
              <Link href='/blog/interviews'>
                <a className="<?= $blog_page == 'interview' ? 'active' : '' ?>">Интервью</a>
              </Link>
            </li>

            <li className={classes.TabBarItem}>
              <Link href='/blog/news'>
                <a className="<?= $blog_page == 'news' ? 'active' : '' ?>">Новости</a>
              </Link>
            </li>

            <li className={classes.TabBarItem}>
              <Link href='/blog/articles'>
                <a className={currentPage === 'articles' ? classes.Active : ''}>База знаний</a>
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
});
