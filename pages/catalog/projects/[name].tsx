import { ProjectsItemPage } from '../../../components/ProjectsItemPage/ProjectsItemPage';
import { useRouter } from 'next/router';
import { getPost } from '../../../helpers/helpers';
import { ServerData, ServerSideProps } from '../../../interfaces/interfaces';
import pagesStore from '../../../store/pagesStore';
import { graphQLClient } from '../../../helpers/graphQLClient';
import { project } from '../../../graphql/queries/project';

const ProjectItem = ({ serverData }: ServerSideProps) => {
  const { dataPost }: ServerData = serverData;
  const { setSecondaryTabBar, setCategory, setCurrentPage } = pagesStore;
  setCurrentPage('projects');
  setSecondaryTabBar(true);
  setCategory('Каталог');
  const router = useRouter();

  const attrs = {
    dataPost,
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
    dataPost: {},
    dataCategories: [],
  };

  try {
    // serverData.dataPost = await getPost(query.name);
    const { posts } = await graphQLClient.request(project, { name: query.name });
    const [post] = posts.nodes;
    serverData.dataPost = post;

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
