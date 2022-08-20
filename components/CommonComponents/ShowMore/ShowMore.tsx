import classes from './ShowMore.module.scss';

export const ShowMore = ({ width = '', text = '' }: { width?: string; text: string }) => {
  return (
    <div className={classes.ShowMore} style={{ width }}>
      {/*<a href='#'>Больше курсов</a>*/}
      <button>{text}</button>
    </div>
  );
};
