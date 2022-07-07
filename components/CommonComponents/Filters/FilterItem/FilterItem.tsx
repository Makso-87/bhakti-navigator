import classes from './FilterItem.module.scss';
import { FilterItemProps } from '../../../../interfaces/interfaces';
import { useEffect, useRef } from 'react';
import { slideDown, slideUp } from '../../../../helpers/helpers';

export const FilterItem = (props: FilterItemProps) => {
  const { showMore = false, children, name = 'Группа' } = props;
  const ref = useRef<HTMLLIElement>();

  useEffect(() => {
    const trigger = ref.current.querySelector(`.${classes.Trigger}`);
    const listContainer: any = ref.current.querySelector(`.${classes.ListContainer}`);
    trigger.addEventListener('click', (event: Event) => {
      event.preventDefault();

      if (window.getComputedStyle(listContainer).display === 'none') {
        slideDown(listContainer, 400);
        ref.current.classList.add(`${classes.Active}`);
      } else {
        slideUp(listContainer, 200);
        ref.current.classList.remove(`${classes.Active}`);
      }
    });
  }, []);

  return (
    <li ref={ref} className={classes.FilterItem}>
      <a className={classes.Trigger} href='#'>
        {name}
      </a>

      <div className={classes.ListContainer}>
        <ul>
          {children.map((child, index) => {
            return index !== children.length - 1 ? child : null;
          })}
        </ul>

        {<ul className={classes.Additional}>{children[children.length - 1].props.children}</ul>}
        {showMore ? <div className={classes.ShowMore}>{showMore}</div> : null}
      </div>
    </li>
  );
};
