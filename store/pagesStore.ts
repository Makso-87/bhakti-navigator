import { makeAutoObservable } from 'mobx';

class PagesStore {
  currentPage: string = 'main';
  category: string = '';
  secondaryTabBar: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentPage = (newCurrentPage) => {
    this.currentPage = newCurrentPage;
  };

  setCategory = (newCategory) => {
    this.category = newCategory;
  };

  setSecondaryTabBar = (newSecondaryTabBar) => {
    this.secondaryTabBar = newSecondaryTabBar;
  };
}

export default new PagesStore();
