import classes from './FilterElement.module.scss';
import { FilterElementProps } from '../../../../interfaces/interfaces';

export const FilterElement = (props: FilterElementProps) => {
  const { location = false, name, id, text = 'Элемент', elementType = 'radio' } = props;
  return (
    <li>
      <div className={classes.InputItem}>
        <input name={name} type={elementType} id={id} />
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
