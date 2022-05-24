import { Layout } from '../Layout';
import { MainScreen } from './MainScreen/MainScreen';
import { SortOutScreen } from './SortOutScreen/SortOutScreen';
import { FindScreen } from './FindScreen/FindScreen';
import { SelectScreen } from './SelectScreen/SelectScreen';
import { HelpBanner } from '../Banners/HelpBanner/HelpBanner';
import { ShrilaPrabhupadaBanner } from '../Banners/ShrilaPrabhupadaBanner/ShrilaPrabhupadaBanner';
import { SubscribeScreen } from './SubscribeScreen/SubscribeScreen';

export const MainPage = () => {
  return (
    <Layout>
      <div>
        <MainScreen />
        <SortOutScreen />
        <FindScreen />
        <SelectScreen />
        <HelpBanner />
        <ShrilaPrabhupadaBanner />
        <SubscribeScreen />
      </div>
    </Layout>
  );
};
