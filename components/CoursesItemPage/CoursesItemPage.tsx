import classes from './CoursesItemPage.module.scss';
import { Layout } from '../Layout';
import { MainScreen } from './MainScreen/MainScreen';
import { AboutScreen } from '../CommonComponents/AboutScreen/AboutScreen';
import { CourseTopicsScreen } from './CourseTopicsScreen/CourseTopicsScreen';
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
  const { teachers = [] } = acf || {};

  return (
    <Layout>
      <div className={classes.CourseItemPage}>
        <MainScreen course={course} />
        <AboutScreen />
        <CourseTopicsScreen />
        <ForWhom />
        {teachers.length ? <Teachers teachers={teachers} /> : null}
        <BannerNote />
        <Feedback />
        <InfoScreen />
        <Recommendations />
      </div>
    </Layout>
  );
};
