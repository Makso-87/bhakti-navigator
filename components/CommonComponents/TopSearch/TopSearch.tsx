import classes from './TopSearch.module.scss';
import { TopSearchProps } from '../../../interfaces/interfaces';
import { useState } from 'react';

export const TopSearch = ({ placeholder = 'Поиск', searchHandler = () => {} }: TopSearchProps) => {
  const [value, setValue] = useState('');

  const onInput = (e) => {
    searchHandler(e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className={classes.Top}>
      <div className={classes.Search}>
        <input onInput={onInput} type='text' placeholder={placeholder} value={value} />
        <button onClick={() => searchHandler(value)} />
      </div>
    </div>
  );
};
