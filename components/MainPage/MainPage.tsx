import { Layout } from '../Layout';
import { MainScreen } from './MainScreen/MainScreen';
import { SortOutScreen } from './SortOutScreen/SortOutScreen';
import { FindScreen } from './FindScreen/FindScreen';
import { SelectScreen } from './SelectScreen/SelectScreen';
import { HelpBanner } from '../Banners/HelpBanner/HelpBanner';
import { ShrilaPrabhupadaBanner } from '../Banners/ShrilaPrabhupadaBanner/ShrilaPrabhupadaBanner';
import { SubscribeScreen } from './SubscribeScreen/SubscribeScreen';
import pagesStore from '../../store/pagesStore';
import { ServerData } from '../../interfaces/interfaces';

export const MainPage = (props) => {
  const { dataPages, dataPosts, dataCategories }: ServerData = props;
  pagesStore.setCurrentPage('main');
  const attrs = {
    dataPages,
    dataPosts,
    dataCategories,
  };

  return (
    <Layout>
      <div>
        {/*<MainScreen />*/}
        {/*<SortOutScreen {...attrs} />*/}
        {/*<FindScreen {...attrs} />*/}
        {/*<SelectScreen />*/}
        <HelpBanner customBgColor='#E6EAF1' />
        <ShrilaPrabhupadaBanner />
        <SubscribeScreen />
      </div>
    </Layout>
  );
};
