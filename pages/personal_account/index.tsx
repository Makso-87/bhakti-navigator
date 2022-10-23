import { PersonalAccountPage } from '../../components/PersonalAccountPage/PersonalAccountPage';
import pagesStore from '../../store/pagesStore';

const PersonalAccount = (props) => {
  const { setCurrentPage, setCategory, setSecondaryTabBar } = pagesStore;

  setCurrentPage('personal_account');
  setCategory('');
  setSecondaryTabBar(false);
  return <PersonalAccountPage />;
};

export default PersonalAccount;
