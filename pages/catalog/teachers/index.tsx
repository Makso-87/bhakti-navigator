import { TeachersPages } from '../../../components/TeachersPages/TeachersPages';
import pagesStore from '../../../store/pagesStore';
import { getLink } from '../../../helpers/helpers';
import { ServerData, ServerSideProps } from '../../../interfaces/interfaces';
import { graphQLClient } from '../../../helpers/graphQLClient';
import { teachers } from '../../../graphql/queries/treachers';

const Teachers = ({ serverData }: ServerSideProps) => {
  const { dataPosts }: ServerData = serverData;
  const { setSecondaryTabBar, setCategory, setCurrentPage } = pagesStore;
  setCurrentPage('teachers');
  setCategory('Каталог');
  setSecondaryTabBar(true);

  const list = dataPosts.teachers.map((item) => {
    const { link, teacherACF, title, id } = item;
    const { city, teacherPhoto, courses = [] } = teacherACF;

    return {
      id,
      title,
      link: getLink(link),
      city,
      teacherPhoto: teacherPhoto.sourceUrl,
      courses,
    };
  });

  return <TeachersPages list={list} />;
};

export default Teachers;

export const getServerSideProps = async () => {
  const serverData = {
    dataPosts: {},
    error: null,
  };

  try {
    const { posts } = await graphQLClient.request(teachers);
    serverData.dataPosts = { teachers: posts.nodes };

    return {
      props: {
        serverData,
      },
    };
  } catch (e) {
    serverData.error = JSON.stringify(e);

    return {
      props: {
        serverData,
      },
    };
  }
};
