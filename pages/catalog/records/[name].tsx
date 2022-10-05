import { getPost } from '../../../helpers/helpers';
import { ServerData, ServerSideProps } from '../../../interfaces/interfaces';
import pagesStore from '../../../store/pagesStore';
import { MaterialsItemPage } from '../../../components/MaterialsItemPage/MaterialsItemPage';
import { graphQLClient } from '../../../helpers/graphQLClient';
import { record } from '../../../graphql/queries/record';

const MaterialsItem = ({ serverData }: ServerSideProps) => {
  const { dataPost }: ServerData = serverData;
  const { setSecondaryTabBar, setCategory, setCurrentPage } = pagesStore;
  setCurrentPage('records');
  setSecondaryTabBar(true);
  setCategory('Каталог');

  const attrs = {
    dataPost,
  };

  return <MaterialsItemPage {...attrs} />;
};

export default MaterialsItem;

export const getServerSideProps = async ({ query, req }) => {
  const serverData = {
    postName: query.name,
    dataPost: {},
    error: null,
  };

  try {
    // serverData.dataPost = await getPost(query.name);
    const { posts } = await graphQLClient.request(record, { name: query.name });
    const [post] = posts.nodes;
    serverData.dataPost = post;

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
