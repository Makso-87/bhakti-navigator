import Link from 'next/link';
import cn from 'classnames';
import classes from './Header.module.scss';
import logo from '../../images/icons/bhakti-navigator-logo.png';

const category = false;
const secondaryTabBar = false;
const catalog = false;
const blog = false;

const classesHeader = cn(classes.Header, {
  [classes.FunctionalPage]: category && false,
});

export const Header = () => {
  return (
    <header className={classesHeader}>
      <div className={classes.SiteWrap}>
        {!category ? (
          <div className={classes.Left}>
            <div className={classes.Logo}>
              <Link href='/'>
                <a>
                  <div className={classes.Img} style={{ backgroundImage: `url(${logo.src})` }} />
                </a>
              </Link>
            </div>

            <menu>
              <li>
                <Link href='/navigator/courses.php'>
                  <a>Каталог</a>
                </Link>
              </li>
              <li>
                <Link href='/navigator/page_of_test.php'>
                  <a>Пройти тест</a>
                </Link>
              </li>
              <li>
                <Link href='/navigator/faq.php'>
                  <a>Вопросы и ответы</a>
                </Link>
              </li>
              <li>
                <Link href='/navigator/blog_reading.php'>
                  <a>Блог</a>
                </Link>
              </li>
            </menu>
          </div>
        ) : null}

        {category ? <div className={classes.CategoryName}>{category}</div> : null}

        <div className={classes.Right}>
          <div className={classes.Controls}>
            <div className={classes.Buttons}>
              <div className={classes.SearchTrigger} />

              <div className={classes.SignIn}>
                <Link href='/navigator/authorization_page.php?auth=sign_in'>
                  <a>Вход</a>
                </Link>
              </div>

              <div className={classes.SignUp}>
                <Link href='/navigator/authorization_page.php?auth=sign_up'>
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

      {secondaryTabBar && catalog ? (
        <div className="secondary-pages-tab-container<?= $catalog_root ? ' catalog' : '' ?>">
          <ul className='tab-bar'>
            <li className='tab-bar-item'>
              <Link href='/navigator/courses.php'>
                <a className="<?= $catalog_page == 'courses' ? 'active' : '' ?>">Курсы</a>
              </Link>
            </li>

            <li className='tab-bar-item'>
              <Link href='/navigator/projects.php'>
                <a className="<?= $catalog_page == 'projects'? 'active' : '' ?>">Проекты</a>
              </Link>
            </li>

            <li className='tab-bar-item'>
              <Link href='/navigator/teachers.php'>
                <a className="<?= $catalog_page == 'teachers' ? 'active' : '' ?>">Преподаватели</a>
              </Link>
            </li>

            <li className='tab-bar-item'>
              <Link href='/navigator/materials.php'>
                <a className="<?= $catalog_page == 'materials' ? 'active' : '' ?>">Материалы</a>
              </Link>
            </li>
          </ul>
        </div>
      ) : null}

      {secondaryTabBar && blog ? (
        <div className="secondary-pages-tab-container<?= $blog_root ? ' blog' : '' ?>">
          <ul className='tab-bar'>
            <li className='tab-bar-item'>
              <Link href='/navigator/blog_reading.php'>
                <a className="<?= $blog_page == 'reading' ? 'active' : '' ?>">Почитать</a>
              </Link>
            </li>

            <li className='tab-bar-item'>
              <Link href='/navigator/blog_sort_out.php'>
                <a className="<?= $blog_page == 'sort_out' ? 'active' : '' ?>">Разобраться</a>
              </Link>
            </li>

            <li className='tab-bar-item'>
              <Link href='/navigator/blog_watching.php'>
                <a className="<?= $blog_page == 'watching' ? 'active' : '' ?>">Посмотреть</a>
              </Link>
            </li>

            <li className='tab-bar-item'>
              <Link href='/navigator/blog_interview.php'>
                <a className="<?= $blog_page == 'interview' ? 'active' : '' ?>">Интервью</a>
              </Link>
            </li>

            <li className='tab-bar-item'>
              <Link href='/navigator/blog_news.php'>
                <a className="<?= $blog_page == 'news' ? 'active' : '' ?>">Новости</a>
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
};
