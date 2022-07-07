import { Layout } from '../Layout';
import classes from './ProjectsItemPage.module.scss';
import { MainScreen } from './MainScreen/MainScreen';
import { AboutScreen } from '../CommonComponents/AboutScreen/AboutScreen';
import { LessonsFormat } from '../MaterialsItemPage/LessonsFormat/LessonsFormat';
import { ForWhom } from '../CommonComponents/ForWhom/ForWhom';
import { Teachers } from '../CommonComponents/Teachers/Teachers';
import { Feedback } from '../CommonComponents/Feedback/Feedback';
import { BannerNote } from '../Banners/BannerNote/BannerNote';

export const ProjectsItemPage = (props) => {
  return (
    <Layout>
      <div className={classes.ProjectItemPage}>
        <MainScreen />
        <AboutScreen />
        <LessonsFormat />
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
