import { Layout } from '../Layout';
import { HelpBanner } from '../Banners/HelpBanner/HelpBanner';
import { TopSearch } from '../CommonComponents/TopSearch/TopSearch';
import classesCatalogPage from '../CoursesPage/CoursesPage.module.scss';
import { TeachersList } from '../CommonComponents/TeachersList/TeachersList';

export const TeachersPages = (props) => {
  const { list = [] } = props;

  return (
    <Layout>
      <div className={classesCatalogPage.CatalogPage}>
        <div className={classesCatalogPage.SiteWrap}>
          <div className={classesCatalogPage.ItemsList}>
            <TopSearch placeholder='Поиск по преподавателям' />

            <div className={classesCatalogPage.Middle}>
              <TeachersList list={list} />
            </div>

            <div className={classesCatalogPage.Bottom}>
              <div className={classesCatalogPage.ShowMore}>
                <a href='#'>Все преподаватели</a>
              </div>
            </div>
          </div>
        </div>

        <HelpBanner />
      </div>
    </Layout>
  );
};
