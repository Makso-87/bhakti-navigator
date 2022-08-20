import { Layout } from '../Layout';
import classes from './ProjectsItemPage.module.scss';
import { MainScreen } from './MainScreen/MainScreen';
import { AboutScreen } from '../CommonComponents/AboutScreen/AboutScreen';
import { ForWhom } from '../CommonComponents/ForWhom/ForWhom';
import { Teachers } from '../CommonComponents/Teachers/Teachers';
import { Feedback } from '../CommonComponents/Feedback/Feedback';
import { BannerNote } from '../Banners/BannerNote/BannerNote';
import { ServerData } from '../../interfaces/interfaces';
import { ProjectCourses } from './ProjectCourses/ProjectCourses';

export const ProjectsItemPage = ({ dataPost }: ServerData) => {
  const { acf, title } = dataPost;
  const { courses = [], teachers = [], format, city, site, logo } = acf;

  const mainScreenAttrs = {
    title,
    format,
    city,
    site,
    logo,
  };

  return (
    <Layout>
      <div className={classes.ProjectItemPage}>
        <MainScreen {...mainScreenAttrs} />
        <AboutScreen post={dataPost} />
        <ProjectCourses list={courses} />
        <ForWhom />
        <Teachers teachers={teachers} />
        <BannerNote />
        <Feedback title='Контакты организатора' name='Бхакти-центр' />
        {/*<? require_once($_SERVER["DOCUMENT_ROOT"] . '/navigator/include/for_whom_screen.php'); ?>*/}

        {/*<? require_once($_SERVER["DOCUMENT_ROOT"] . '/navigator/include/teachers_screen.php'); ?>*/}

        {/*<? require_once($_SERVER["DOCUMENT_ROOT"] . '/navigator/include/feedback_and_social_screen.php'); ?>*/}

        {/*<? require_once($_SERVER["DOCUMENT_ROOT"] . '/navigator/include/banner_note.php'); ?>*/}
      </div>
    </Layout>
  );
};
