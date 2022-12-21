import classes from './Filters.module.scss';
import filtersStore from '../../../store/filtersStore';
import { filtersFields } from '../../../helpers/filterSets';
import { FilterItemCheckbox } from './FilterItemCheckbox/FilterItemCheckbox';
import has from 'lodash/has';
import omit from 'lodash/omit';
import { observer } from 'mobx-react-lite';
import { FilterItemRadio } from './FilterItemRadio/FilterItemRadio';

export const Filters = observer((props: any) => {
  const { name, place, applyFilters } = props;
  const filtersSet = filtersFields[place] || [];
  const { filter, setFilter, setResetFilters } = filtersStore;

  const filterElementsMapping = {
    checkbox: (item) => {
      const { name, label } = item;
      const filterElementsList = filtersStore[name];

      return (
        <FilterItemCheckbox
          name={name}
          label={label}
          key={name}
          onChange={onChange}
          filtersElements={filterElementsList}
        />
      );
    },
    radio: (item) => {
      const { name, label } = item;
      const filterElementsList = filtersStore[name];

      return (
        <FilterItemRadio
          name={name}
          label={label}
          key={name}
          onChange={onChange}
          filtersElements={filterElementsList}
        />
      );
    },
  };

  const onChange = (e, type) => {
    const { name, id } = e.target;

    if (has(filter, [name]) && type === 'checkbox') {
      const value = filter[name].list.includes(id)
        ? filter[name].list.filter((item) => item !== id)
        : [...filter[name].list, id];

      if (!value.length) {
        setFilter({ ...omit(filter, name) });
        return;
      }

      setFilter({ ...filter, [name]: { type, list: value } });
    } else {
      const value = [id];

      setFilter({ ...filter, [name]: { type, list: value } });
    }
  };

  const onFiltersApplyClick = (e) => {
    e.preventDefault();
    applyFilters({ ...filter });
  };

  const onResetFiltersClick = (e) => {
    e.preventDefault();
    applyFilters({});
    setFilter({});
    setResetFilters(true);
  };

  return (
    <div className={classes.Filters}>
      <form className={classes.Form}>
        <div className={classes.Title}>{name}</div>

        <ul className={classes.CategoriesList}>
          {filtersSet.length
            ? filtersSet.map((item) => {
                return filterElementsMapping[item.type](item);
              })
            : null}
        </ul>
      </form>

      {Object.keys(filtersStore.filter).length ? (
        <>
          <button onClick={onFiltersApplyClick} className={classes.Button}>
            Применить фильтры
          </button>

          <button onClick={onResetFiltersClick} className={classes.Button}>
            Сбросить все фильтры
          </button>
        </>
      ) : null}
    </div>
  );
});
