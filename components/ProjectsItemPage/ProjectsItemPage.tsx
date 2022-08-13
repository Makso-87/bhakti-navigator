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
  const { acf } = dataPost;
  const { courses = [] } = acf;

  return (
    <Layout>
      <div className={classes.ProjectItemPage}>
        <MainScreen />
        <AboutScreen />
        <ProjectCourses list={courses} />
        <ForWhom />
        <Teachers />
        <Feedback />
        <BannerNote />
        {/*<? require_once($_SERVER["DOCUMENT_ROOT"] . '/navigator/include/for_whom_screen.php'); ?>*/}

        {/*<? require_once($_SERVER["DOCUMENT_ROOT"] . '/navigator/include/teachers_screen.php'); ?>*/}

        {/*<? require_once($_SERVER["DOCUMENT_ROOT"] . '/navigator/include/feedback_and_social_screen.php'); ?>*/}

        {/*<? require_once($_SERVER["DOCUMENT_ROOT"] . '/navigator/include/banner_note.php'); ?>*/}
      </div>
    </Layout>
  );
};
