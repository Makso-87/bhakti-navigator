import { ProjectsItemPage } from '../../../components/ProjectsItemPage/ProjectsItemPage';
import { useRouter } from 'next/router';
import { getCategories, getPosts } from '../../../helpers/helpers';
import { ServerData, ServerSideProps } from '../../../interfaces/interfaces';
import pagesStore from '../../../store/pagesStore';

const ProjectItem = ({ serverData }: ServerSideProps) => {
  const { dataPosts, dataCategories, postName }: ServerData = serverData;
  const { setSecondaryTabBar, setCategory, setCurrentPage } = pagesStore;
  setCurrentPage('projects');
  setSecondaryTabBar(true);
  setCategory('Каталог');
  const router = useRouter();

  const attrs = {
    postName,
    dataPosts,
    dataCategories,
    name: router.query.name,
  };

  return <ProjectsItemPage {...attrs} />;
};

export default ProjectItem;

export const getServerSideProps = async ({ query, req }) => {
  const serverData = {
    postName: query.name,
    dataPages: [],
    dataMedia: [],
    dataPosts: [],
    dataCategories: [],
  };

  try {
    const responsePosts = await getPosts();
    const responseCategories = await getCategories();

    serverData.dataPosts = await responsePosts.json();
    serverData.dataCategories = await responseCategories.json();

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
