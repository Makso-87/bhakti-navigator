import classes from './TeachersItemPage.module.scss';
import { Layout } from '../Layout';
import { TeacherNote } from '../Banners/TeacherNote/TeacherNote';
import { AboutScreen } from '../CommonComponents/AboutScreen/AboutScreen';
import { AvailableCoursesScreen } from './AvailableCoursesScreen/AvailableCoursesScreen';
import { Feedback } from '../CommonComponents/Feedback/Feedback';
import { Recommendations } from '../CommonComponents/Recommendations/Recommendations';
import { BannerNote } from '../Banners/BannerNote/BannerNote';
import { MainScreen } from './MainScreen/MainScreen';

export const TeachersItemPage = (props) => {
  return (
    <Layout>
      <div className={classes.TeacherItemPage}>
        <MainScreen />
        <AboutScreen />
        <AvailableCoursesScreen />
        <TeacherNote />
        <Feedback />
        <Recommendations />
        <BannerNote />
      </div>
    </Layout>
  );
};
