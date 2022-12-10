import { Layout } from '../Layout';
import classes from './ProjectsItemPage.module.scss';
import { MainScreen } from './MainScreen/MainScreen';
import { AboutScreen } from '../CommonComponents/AboutScreen/AboutScreen';
import { ForWhom } from '../CommonComponents/ForWhom/ForWhom';
import { Teachers } from '../CommonComponents/Teachers/Teachers';
import { Feedback } from '../CommonComponents/Feedback/Feedback';
import { BannerNote } from '../Banners/BannerNote/BannerNote';
import { Post, ServerData } from '../../interfaces/interfaces';
import { ProjectCourses } from './ProjectCourses/ProjectCourses';
import { Recommendations } from '../CommonComponents/Recommendations/Recommendations';

export const ProjectsItemPage = ({ dataPost }: ServerData) => {
  const { projectACF, title }: Post = dataPost;
  const { courses = [], teachers = [], format, city, webSite, logo, for_whom } = projectACF || {};

  const mainScreenAttrs = {
    title,
    format,
    city,
    site: webSite,
    logo: logo?.sourceUrl,
    for_whom,
  };

  return (
    <Layout>
      <div className={classes.ProjectItemPage}>
        <MainScreen {...mainScreenAttrs} />
        <AboutScreen post={dataPost} />
        <ProjectCourses list={courses} />
        {for_whom ? <ForWhom text={for_whom} /> : null}
        <Teachers teachers={teachers} />
        <BannerNote />
        <Feedback title='Контакты организатора' name='Бхакти-центр' />
        <Recommendations />
        {/*<? require_once($_SERVER["DOCUMENT_ROOT"] . '/navigator/include/for_whom_screen.php'); ?>*/}

        {/*<? require_once($_SERVER["DOCUMENT_ROOT"] . '/navigator/include/teachers_screen.php'); ?>*/}

        {/*<? require_once($_SERVER["DOCUMENT_ROOT"] . '/navigator/include/feedback_and_social_screen.php'); ?>*/}

        {/*<? require_once($_SERVER["DOCUMENT_ROOT"] . '/navigator/include/banner_note.php'); ?>*/}
      </div>
    </Layout>
  );
};
