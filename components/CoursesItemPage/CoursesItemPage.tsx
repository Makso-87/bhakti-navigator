import classes from './CoursesItemPage.module.scss';
import { Layout } from '../Layout';
import { MainScreen } from './MainScreen/MainScreen';
import { AboutScreen } from '../CommonComponents/AboutScreen/AboutScreen';
import { CourseProgramScreen } from './CourseProgramScreen/CourseProgramScreen';
import { InfoScreen } from './InfoScreen/InfoScreen';
import { Teachers } from '../CommonComponents/Teachers/Teachers';
import { ForWhom } from '../CommonComponents/ForWhom/ForWhom';
import { Feedback } from '../CommonComponents/Feedback/Feedback';
import { Recommendations } from '../CommonComponents/Recommendations/Recommendations';
import { BannerNote } from '../Banners/BannerNote/BannerNote';
import { Post, ServerData } from '../../interfaces/interfaces';

export const CoursesItemPage = (props: ServerData) => {
  const { dataPost } = props;
  const course: Post = { ...dataPost };
  const { courseACF } = course;
  const {
    teachers = [],
    info,
    forWhom,
    organizerProject,
    organizerExternal,
    organizerLink,
    courseProgram = [],
  } = courseACF ?? {};

  const feedBackAttrs = {
    title: 'По всем вопросам свяжитесь с организатором курса',
    name: organizerProject?.title ?? organizerExternal ?? '',
    siteLink: organizerProject?.teacherACF?.webSite ?? organizerLink ?? '',
    email: organizerProject?.teacherACF?.email ?? '',
    twitter: organizerProject?.teacherACF?.twitter ?? '',
    facebook: organizerProject?.teacherACF?.facebook ?? '',
    instagram: organizerProject?.teacherACF?.instagram ?? '',
    telegram: organizerProject?.teacherACF?.telegram ?? '',
    vkontakte: organizerProject?.teacherACF?.vkontakte ?? '',
    odnoklassniki: organizerProject?.teacherACF?.odnoklassniki ?? '',
    whatsapp: organizerProject?.teacherACF?.whatsapp ?? '',
  };

  return (
    <Layout>
      <div className={classes.CourseItemPage}>
        <MainScreen course={course} />
        <AboutScreen post={course} />
        {courseProgram !== null ? <CourseProgramScreen program={courseProgram} /> : null}
        {forWhom !== null ? <ForWhom text={forWhom} /> : null}
        {teachers !== null ? <Teachers teachers={teachers} /> : null}
        <BannerNote />
        <Feedback {...feedBackAttrs} />
        <InfoScreen text={info} />
        <Recommendations />
      </div>
    </Layout>
  );
};
