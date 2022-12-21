import classes from './FilterCheckboxElement.module.scss';
import { FilterElementProps } from '../../../../interfaces/interfaces';
import { useState } from 'react';
import filtersStore from '../../../../store/filtersStore';

export const FilterCheckboxElement = (props: FilterElementProps) => {
  const { name, id, text = 'Элемент', changeHandler } = props;
  const [checked, setChecked] = useState(false);

  if (filtersStore.resetFilters && checked) {
    setChecked(false);
  }

  const onChange = (e) => {
    changeHandler(e, 'checkbox');

    setChecked(!checked);

    if (filtersStore.resetFilters) {
      filtersStore.setResetFilters(false);
    }
  };

  return (
    <li>
      <div className={classes.InputItem}>
        <input
          onChange={(e) => onChange(e)}
          name={name}
          type='checkbox'
          id={id}
          checked={checked}
        />

        <label htmlFor={id}>{text}</label>
      </div>
    </li>
  );
};
