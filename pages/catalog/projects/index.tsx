import { ProjectsPage } from '../../../components/ProjectsPage/ProjectsPage';
import pagesStore from '../../../store/pagesStore';
import {
  getCategoryData,
  getLink,
  getPostsByCategory,
  getPostsList,
} from '../../../helpers/helpers';
import { ServerData, ServerSideProps } from '../../../interfaces/interfaces';
import { graphQLClient } from '../../../helpers/graphQLClient';
import { projects } from '../../../graphql/queries/projects';

const Projects = ({ serverData }: ServerSideProps) => {
  const { dataPosts, dataCategories }: ServerData = serverData;
  const { setSecondaryTabBar, setCategory, setCurrentPage } = pagesStore;
  setCurrentPage('projects');
  setCategory('Каталог');
  setSecondaryTabBar(true);

  const list = dataPosts.projects.map((item) => {
    const { link, projectACF, title, id } = item;
    const { format, city, webSite, logo } = projectACF;

    return {
      id,
      title,
      link: getLink(link),
      format,
      city,
      site: webSite,
      logo: logo.sourceUrl,
    };
  });

  return <ProjectsPage list={list} />;
};

export default Projects;

export const getServerSideProps = async ({ query, req }) => {
  const serverData = {
    dataPosts: {},
  };

  try {
    // serverData.dataPosts = { projects: await getPostsByCategory('projects') };
    const { posts } = await graphQLClient.request(projects);
    serverData.dataPosts = {
      projects: posts.nodes,
    };

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
