import { makeAutoObservable } from 'mobx';
import { Menu } from '../interfaces/interfaces';

class MenusStore {
  headerMenu: Menu;
  blogMenu: Menu;
  catalogMenu: Menu;

  constructor() {
    makeAutoObservable(this);
  }

  setHeaderMenu = (newMenu: Menu) => {
    this.headerMenu = { ...newMenu };
  };

  setBlogMenu = (newMenu: Menu) => {
    this.blogMenu = { ...newMenu };
  };

  setCatalogMenu = (newMenu: Menu) => {
    this.catalogMenu = { ...newMenu };
  };
}

export default new MenusStore();
