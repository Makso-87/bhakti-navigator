import Link from 'next/link';
import classes from './HeaderContent.module.scss';
import logo from '../../../images/icons/bhakti-navigator-logo.png';
import pagesStore from '../../../store/pagesStore';
const logoUrl = logo.src;

export const HeaderContent = ({ logo = false }) => {
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
                <Link href='/catalog/'>
                  <a>Каталог</a>
                </Link>
              </li>
              <li>
                <Link href='/test/'>
                  <a>Пройти тест</a>
                </Link>
              </li>
              <li>
                <Link href='/faq/'>
                  <a>Вопросы и ответы</a>
                </Link>
              </li>
              <li>
                <Link href='/blog/'>
                  <a>Блог</a>
                </Link>
              </li>
            </menu>
          </div>
        ) : null}

        {category !== '' ? <div className={classes.CategoryName}>{category}</div> : null}

        <div className={classes.Right}>
          <div className={classes.Controls}>
            <div className={classes.Buttons}>
              <div className={classes.SearchTrigger} />

              <div className={classes.SignIn}>
                <Link href='/authorization_page?auth=sign_in'>
                  <a>Вход</a>
                </Link>
              </div>

              <div className={classes.SignUp}>
                <Link href='/authorization_page?auth=sign_up'>
                  <a>Регистрация</a>
                </Link>
              </div>
            </div>
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

      {secondaryTabBar && currentPage === 'catalog' ? (
        <div className={classes.SecondaryPagesTabContainer}>
          <ul className={classes.TabBar}>
            <li className={classes.TabBarItem}>
              <Link href='/catalog/'>
                <a className="<?= $catalog_page == 'courses' ? 'active' : '' ?>">Курсы</a>
              </Link>
            </li>

            <li className={classes.TabBarItem}>
              <Link href='/catalog/projects/'>
                <a className="<?= $catalog_page == 'projects'? 'active' : '' ?>">Проекты</a>
              </Link>
            </li>

            <li className={classes.TabBarItem}>
              <Link href='/catalog/teachers/'>
                <a className="<?= $catalog_page == 'teachers' ? 'active' : '' ?>">Преподаватели</a>
              </Link>
            </li>

            <li className={classes.TabBarItem}>
              <Link href='/catalog/materials/'>
                <a className="<?= $catalog_page == 'materials' ? 'active' : '' ?>">Материалы</a>
              </Link>
            </li>
          </ul>
        </div>
      ) : null}

      {secondaryTabBar && currentPage === 'blog' ? (
        <div className={classes.SecondaryPagesTabContainer}>
          <ul className={classes.TabBar}>
            <li className={classes.TabBarItem}>
              <Link href='/blog/'>
                <a className="<?= $blog_page == 'reading' ? 'active' : '' ?>">Почитать</a>
              </Link>
            </li>

            <li className={classes.TabBarItem}>
              <Link href='/blog/sort_out/'>
                <a className="<?= $blog_page == 'sort_out' ? 'active' : '' ?>">Разобраться</a>
              </Link>
            </li>

            <li className={classes.TabBarItem}>
              <Link href='/blog/watching/'>
                <a className="<?= $blog_page == 'watching' ? 'active' : '' ?>">Посмотреть</a>
              </Link>
            </li>

            <li className={classes.TabBarItem}>
              <Link href='/blog/interview/'>
                <a className="<?= $blog_page == 'interview' ? 'active' : '' ?>">Интервью</a>
              </Link>
            </li>

            <li className={classes.TabBarItem}>
              <Link href='/blog/news/'>
                <a className="<?= $blog_page == 'news' ? 'active' : '' ?>">Новости</a>
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};
