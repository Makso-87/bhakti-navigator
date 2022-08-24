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
  const { acf } = course;
  const {
    teachers = [],
    info,
    for_whom,
    organizer_project,
    organizer_external,
    organizer_link,
    course_program = [],
  } = acf || {};

  const feedBackAttrs = {
    title: 'По всем вопросам свяжитесь с организатором курса',
    name: organizer_project?.title || organizer_external,
    siteLink: organizer_project?.acf?.web_site || organizer_link,
    email: organizer_project?.acf?.email || '',
    twitter: organizer_project?.acf?.twitter || '',
    facebook: organizer_project?.acf?.facebook || '',
    instagram: organizer_project?.acf?.instagram || '',
    telegram: organizer_project?.acf?.telegram || '',
    vkontakte: organizer_project?.acf?.vkontakte || '',
    odnoklassniki: organizer_project?.acf?.odnoklassniki || '',
    whatsapp: organizer_project?.acf?.whatsapp || '',
  };

  console.log('organizer_project', organizer_project);

  return (
    <Layout>
      <div className={classes.CourseItemPage}>
        <MainScreen course={course} />
        <AboutScreen post={course} />
        {course_program.length ? <CourseProgramScreen program={course_program} /> : null}
        {for_whom ? <ForWhom text={for_whom} /> : null}
        {teachers.length ? <Teachers teachers={teachers} /> : null}
        <BannerNote />
        <Feedback {...feedBackAttrs} />
        <InfoScreen text={info} />
        <Recommendations />
      </div>
    </Layout>
  );
};
