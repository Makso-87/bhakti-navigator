import { makeAutoObservable } from 'mobx';
import { Category, Media, Page, Post } from '../interfaces/interfaces';

class DataStore {
  dataPages: Page[] = [];
  dataMedia: Media[] = [];
  dataPosts: Post[] = [];
  dataCategories: Category[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setDataPages = (data: Page[] = []) => {
    this.dataPages = [...data];
  };

  setDataPosts = (data: Post[] = []) => {
    this.dataPosts = [...data];
  };

  setDataMedia = (data: Media[] = []) => {
    this.dataMedia = [...data];
  };

  setDataCategories = (data: Category[] = []) => {
    this.dataCategories = [...data];
  };
}

export default new DataStore();
