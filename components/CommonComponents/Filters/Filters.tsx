import classes from './Filters.module.scss';
import filtersStore from '../../../store/filtersStore';
import { filtersFields } from '../../../helpers/filterSets';
import { FilterItem } from './FilterItem/FilterItem';
import { FilterElement } from './FilterElement/FilterElement';
import { useState } from 'react';
import has from 'lodash/has';
import omit from 'lodash/omit';

export const Filters = (props) => {
  const [form, setForm] = useState({});
  const [clearFilters, setClearFilters] = useState(false);
  const { name, place, applyFilters } = props;
  const filtersSet = filtersFields[place] || [];

  const onChange = (e, type) => {
    const { name, id } = e.target;

    if (has(form, [name]) && type === 'checkbox') {
      const value = form[name].list.includes(id)
        ? form[name].list.filter((item) => item !== id)
        : [...form[name].list, id];

      if (!value.length) {
        setForm({ ...omit(form, name) });
        return;
      }

      setForm({ ...form, [name]: { type, list: value } });
    } else {
      const value = [id];

      setForm({ ...form, [name]: { type, list: value } });
    }
  };

  const onFiltersApplyClick = (e) => {
    e.preventDefault();
    applyFilters({ ...form });
    filtersStore.setFilter({ ...form });
  };

  const onResetFiltersClick = (e) => {
    e.preventDefault();
    setForm({});
    applyFilters({});
    filtersStore.setFilter({});
    // setClearFilters(true);
  };

  return (
    <div className={classes.Filters}>
      <form className={classes.Form}>
        <div className={classes.Title}>{name}</div>

        <ul className={classes.CategoriesList}>
          {filtersSet.length
            ? filtersSet.map((item) => {
                const { name, label, type } = item;
                const filterElementsList = filtersStore[name];

                return (
                  <FilterItem name={label} key={name}>
                    {filterElementsList?.length
                      ? filterElementsList.map((element) => {
                          const { title, id } = element;

                          return (
                            <FilterElement
                              key={id}
                              changeHandler={onChange}
                              name={name}
                              id={id}
                              text={title}
                              elementType={type}
                            />
                          );
                        })
                      : null}
                  </FilterItem>
                );
              })
            : null}
        </ul>
      </form>

      {Object.keys(form).length ? (
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
};
