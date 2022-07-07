import { ProjectsPage } from '../../../components/ProjectsPage/ProjectsPage';
import pagesStore from '../../../store/pagesStore';
import {
  getCategories,
  getCategoryData,
  getLink,
  getPosts,
  getPostsList,
} from '../../../helpers/helpers';
import { ServerData, ServerSideProps } from '../../../interfaces/interfaces';

const Projects = ({ serverData }: ServerSideProps) => {
  const { dataPosts, dataCategories }: ServerData = serverData;
  const { setSecondaryTabBar, setCategory, setCurrentPage } = pagesStore;
  setCurrentPage('projects');
  setCategory('Каталог');
  setSecondaryTabBar(true);
  const projectsCategory = getCategoryData(dataCategories, 'projects');
  const projects = getPostsList(dataPosts, projectsCategory?.id) || [];

  const list = projects.map((item) => {
    const { link, acf, title, id } = item;
    const { format, city, site, logo } = acf;

    return {
      id,
      title: title.rendered,
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
