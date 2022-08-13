import { TeachersPages } from '../../../components/TeachersPages/TeachersPages';
import pagesStore from '../../../store/pagesStore';
import { getLink, getPostsByCategory } from '../../../helpers/helpers';
import { ServerData, ServerSideProps } from '../../../interfaces/interfaces';

const Teachers = ({ serverData }: ServerSideProps) => {
  const { dataPosts }: ServerData = serverData;
  const { setSecondaryTabBar, setCategory, setCurrentPage } = pagesStore;
  setCurrentPage('teachers');
  setCategory('Каталог');
  setSecondaryTabBar(true);

  const list = dataPosts.map((item) => {
    const { link, acf, title, id } = item;
    const { city, teacher_photo, courses = [] } = acf;

    return {
      id,
      title,
      link: getLink(link),
      city,
      teacher_photo,
      courses,
    };
  });

  return <TeachersPages list={list} />;
};

export default Teachers;

export const getServerSideProps = async ({ query, req }) => {
  const serverData = {
    dataPages: [],
    dataMedia: [],
    dataPosts: [],
    dataCategories: [],
  };

  try {
    serverData.dataPosts = await getPostsByCategory('teachers');

    return {
      props: {
        serverData,
      },
    };
  } catch (e) {
    return {
      props: {
        serverData,
      },
    };
  }
};
