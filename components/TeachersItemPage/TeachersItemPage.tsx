import classes from './TeachersItemPage.module.scss';
import { Layout } from '../Layout';
import { TeacherNote } from '../Banners/TeacherNote/TeacherNote';
import { AboutScreen } from '../CommonComponents/AboutScreen/AboutScreen';
import { AvailableCoursesScreen } from './AvailableCoursesScreen/AvailableCoursesScreen';
import { Feedback } from '../CommonComponents/Feedback/Feedback';
import { Recommendations } from '../CommonComponents/Recommendations/Recommendations';
import { BannerNote } from '../Banners/BannerNote/BannerNote';
import { MainScreen } from './MainScreen/MainScreen';
import { Post } from '../../interfaces/interfaces';

export const TeachersItemPage = ({ post }: { post: Post }) => {
  const { courses } = post.acf;
  return (
    <Layout>
      <div className={classes.TeacherItemPage}>
        <MainScreen post={post} />
        <AboutScreen post={post} />
        {courses.length ? <AvailableCoursesScreen post={post} /> : null}
        <TeacherNote post={post} />
        <Recommendations />
        <BannerNote />
        <Feedback title='Контакты преподавателя' name={post.title} />
      </div>
    </Layout>
  );
};
