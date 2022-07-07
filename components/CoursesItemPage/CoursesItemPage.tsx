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
import { ServerData } from '../../interfaces/interfaces';
import { getPostData } from '../../helpers/helpers';

export const CoursesItemPage = (props: ServerData) => {
  const { dataPosts, dataCategories, postName } = props;
  const course = getPostData(dataPosts, postName);
  return (
    <Layout>
      <div className={classes.CourseItemPage}>
        <MainScreen />
        <AboutScreen />
        <CourseTopicsScreen />
        <Teachers />
        <ForWhom />
        <Feedback />
        <InfoScreen />
        <Recommendations />
        <BannerNote />
      </div>
    </Layout>
  );
};
