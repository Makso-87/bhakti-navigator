import filtersStore from '../store/filtersStore';
import { filtersFields } from './filterSets';
import isArray from 'lodash/isArray';

export const filterPosts = (postsList: any[], place) => {
  const filtersSet = filtersFields[place] || [];
  const { filter, getFiltersSortedByType } = filtersStore;
  const sortedByTypeFilters: any = getFiltersSortedByType();
  const { checkbox, radio } = sortedByTypeFilters;

  console.log('filter', filter);
  console.log('filtersSet', filtersSet);
  console.log('typeRadioFilters', sortedByTypeFilters);

  const filteredByCheckbox = checkbox
    ? postsList.filter((postItem) => {
        const { courseACF, recordACF, materialACF, faqACF } = postItem;
        const advancedCustomFields = courseACF || recordACF || materialACF || faqACF;
        const allMatches = [];

        checkbox.forEach((filterItem) => {
          let keyName;

          if (courseACF) {
            keyName = filterItem.name === 'teachers' ? 'speaker' : filterItem.name;
          }

          if (recordACF || materialACF || faqACF) {
            keyName = filterItem.name === 'teachers' ? 'author' : filterItem.name;
          }

          let matches = [];

          if (isArray(advancedCustomFields[keyName])) {
            matches = advancedCustomFields[keyName].filter((acfItem) => {
              const result = filterItem.list.filter((item) => item === acfItem.id);

              return result.length;
            });

            if (matches.length) {
              allMatches.push(matches);
              return;
            }
          }

          matches = filterItem.list.filter((filterItem) => {
            return filterItem === advancedCustomFields[keyName].id;
          });

          if (matches.length) {
            allMatches.push(matches);
            return;
          }
        });

        return allMatches.length;
      })
    : postsList;

  return radio
    ? filteredByCheckbox.filter((filteredByCheckboxItem) => {
        const { courseACF, recordACF, materialACF, faqACF } = filteredByCheckboxItem;
        const advancedCustomFields = courseACF || recordACF || materialACF || faqACF;

        const radioFiltersMatches = radio.filter((radioFilterItem) => {
          return radioFilterItem.list.includes(advancedCustomFields[radioFilterItem.name].id);
        });

        return radioFiltersMatches.length === radio.length;
      })
    : filteredByCheckbox;
};
