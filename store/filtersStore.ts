import { makeAutoObservable } from 'mobx';
import has from 'lodash/has';

class FiltersStore {
  constructor() {
    makeAutoObservable(this);
  }

  filter = {};
  resetFilters = false;

  courseCategory: [] = [];
  themes: [] = [];
  bhaktiLevel: [] = [];
  serviceKind: [] = [];
  teachers: [] = [];
  format: [] = [];
  materialType: [] = [];

  setFiltersList = ({
    courseCategory = [],
    themes = [],
    bhaktiLevel = [],
    serviceKind = [],
    teachers = [],
    format = [],
    materialType = [],
  }: {
    courseCategory: [];
    themes: [];
    bhaktiLevel: [];
    serviceKind: [];
    teachers: [];
    format: [];
    materialType: [];
  }) => {
    this.courseCategory = courseCategory;
    this.themes = themes;
    this.bhaktiLevel = bhaktiLevel;
    this.serviceKind = serviceKind;
    this.teachers = teachers;
    this.format = format;
    this.materialType = materialType;
  };

  setFilter = (filter) => {
    console.log('filter set!');
    this.filter = { ...filter };
  };

  setResetFilters = (value: boolean) => {
    this.resetFilters = value;
  };

  getFiltersSortedByType = () => {
    const { filter } = this;
    const filterKeys = Object.keys(filter);
    return filterKeys.reduce((acc, item) => {
      const filterItem = filter[item];
      filterItem.name = item;

      if (has(acc, filterItem.type)) {
        return {
          ...acc,
          [filterItem.type]: [...acc[filterItem.type], filterItem],
        };
      }

      return {
        ...acc,
        [filterItem.type]: [filterItem],
      };
    }, {});
  };
}

export default new FiltersStore();
