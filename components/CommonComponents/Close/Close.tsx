import classes from './Close.module.scss';

export const Close = ({ onClick, className = '' }) => {
  return <div onClick={onClick} className={`${classes.Close} ${className}`} />;
};
