import { makeAutoObservable } from 'mobx';

class FiltersStore {
  constructor() {
    makeAutoObservable(this);
  }

  filter = {};

  courseCategory: [] = [];
  themes: [] = [];
  bhaktiLevel: [] = [];
  serviceKind: [] = [];
  teachers: [] = [];
  format: [] = [];
  types: [] = [];

  setFiltersList = ({
    courseCategory = [],
    themes = [],
    bhaktiLevel = [],
    serviceKind = [],
    teachers = [],
    format = [],
    types = [],
  }: {
    courseCategory: [];
    themes: [];
    bhaktiLevel: [];
    serviceKind: [];
    teachers: [];
    format: [];
    types: [];
  }) => {
    this.courseCategory = courseCategory;
    this.themes = themes;
    this.bhaktiLevel = bhaktiLevel;
    this.serviceKind = serviceKind;
    this.teachers = teachers;
    this.format = format;
    this.types = types;
  };

  setFilter = (filter) => {
    console.log('filter set!');
    this.filter = { ...filter };
  };
}

export default new FiltersStore();
