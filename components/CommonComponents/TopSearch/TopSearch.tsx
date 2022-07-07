import classes from './TopSearch.module.scss';
import { TopSearchProps } from '../../../interfaces/interfaces';

export const TopSearch = ({ placeholder = 'Поиск', searchHandler = () => {} }: TopSearchProps) => {
  return (
    <div className={classes.Top}>
      <div className={classes.Search}>
        <input type='text' placeholder={placeholder} />
        <button onSubmit={searchHandler} />
      </div>
    </div>
  );
};
