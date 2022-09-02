import { ProjectsPage } from '../../../components/ProjectsPage/ProjectsPage';
import pagesStore from '../../../store/pagesStore';
import {
  getCategoryData,
  getLink,
  getPostsByCategory,
  getPostsList,
} from '../../../helpers/helpers';
import { ServerData, ServerSideProps } from '../../../interfaces/interfaces';

const Projects = ({ serverData }: ServerSideProps) => {
  const { dataPosts, dataCategories }: ServerData = serverData;
  const { setSecondaryTabBar, setCategory, setCurrentPage } = pagesStore;
  setCurrentPage('projects');
  setCategory('Каталог');
  setSecondaryTabBar(true);

  const list = dataPosts.projects.map((item) => {
    const { link, acf, title, id } = item;
    const { format, city, site, logo } = acf;

    return {
      id,
      title,
      link: getLink(link),
      format,
      city,
      site,
      logo,
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
    serverData.dataPosts = { projects: await getPostsByCategory('projects') };

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
