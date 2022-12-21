import classes from './FilterRadioElement.module.scss';
import filtersStore from '../../../../store/filtersStore';

export const FilterRadioElement = (props) => {
  const {
    location = false,
    name,
    id,
    text = 'Элемент',
    changeHandler,
    currentValue,
    setCurrentValue,
  } = props;

  if (filtersStore.resetFilters) {
    setCurrentValue('');
  }

  const onChange = (e) => {
    changeHandler(e, 'radio');
    setCurrentValue(e.target.value);

    if (filtersStore.resetFilters) {
      filtersStore.setResetFilters(false);
    }
  };

  return (
    <li>
      <div className={classes.InputItem}>
        <input
          onChange={(e) => onChange(e)}
          value={id}
          name={name}
          type='radio'
          id={id}
          checked={currentValue === id}
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
