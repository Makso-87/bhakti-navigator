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
import { removeAllSpaces } from '../../helpers/helpers';

export const TeachersItemPage = ({ post }: { post: Post }) => {
  const { teacherACF, title = 'Имя преподавателя' } = post;
  const {
    courses,
    email,
    twitter,
    facebook,
    instagram,
    telegram,
    vkontakte,
    odnoklassniki,
    whatsapp,
    canArrive,
  } = teacherACF;

  const [canArriveValue] = canArrive || [];

  const feedbackAttrs = {
    name: title,
    email: removeAllSpaces(email),
    twitter: removeAllSpaces(twitter),
    facebook: removeAllSpaces(facebook),
    instagram: removeAllSpaces(instagram),
    telegram: removeAllSpaces(telegram),
    vkontakte: removeAllSpaces(vkontakte),
    odnoklassniki: removeAllSpaces(odnoklassniki),
    whatsapp: removeAllSpaces(whatsapp),
  };

  return (
    <Layout>
      <div className={classes.TeacherItemPage}>
        <MainScreen post={post} />
        <AboutScreen post={post} />
        {courses?.length ? <AvailableCoursesScreen post={post} /> : null}
        {canArriveValue === 'yes' ? <TeacherNote /> : null}
        <BannerNote />
        <Feedback title='Контакты преподавателя' {...feedbackAttrs} />
        <Recommendations />
      </div>
    </Layout>
  );
};
