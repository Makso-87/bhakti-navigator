import classes from './FilterElement.module.scss';
import { FilterElementProps } from '../../../../interfaces/interfaces';
import { useState } from 'react';

export const FilterElement = (props: FilterElementProps) => {
  const {
    location = false,
    name,
    id,
    text = 'Элемент',
    elementType = 'radio',
    changeHandler,
  } = props;

  const [checked, setChecked] = useState(false);

  const onChange = (e) => {
    changeHandler(e, elementType);
    setChecked(!checked);
  };

  return (
    <li>
      <div className={classes.InputItem}>
        <input
          onChange={(e) => onChange(e)}
          name={name}
          type={elementType}
          id={id}
          checked={checked}
        />

        <label htmlFor={id}>{text}</label>
      </div>

      {location ? (
        <div className={classes.Location}>
          <select name={location.name} id={location.id}>
            {location.list.map((item, index) => {
              return (
                <option key={index} value={index}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
      ) : null}
    </li>
  );
};
