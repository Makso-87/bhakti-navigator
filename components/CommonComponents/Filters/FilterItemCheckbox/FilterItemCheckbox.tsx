import classes from './FilterItemCheckbox.module.scss';
import { FilterItemProps } from '../../../../interfaces/interfaces';
import { useEffect, useRef } from 'react';
import { slideDown, slideUp } from '../../../../helpers/helpers';
import { FilterCheckboxElement } from '../FilterCheckboxElement/FilterCheckboxElement';

export const FilterItemCheckbox = (props: FilterItemProps) => {
  const { showMore = false, name, label = 'Группа', filtersElements, onChange } = props;
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
        {label}
      </a>

      <div className={classes.ListContainer}>
        <ul>
          {filtersElements?.length
            ? filtersElements.map((element) => {
                const { title, id } = element;

                return (
                  <FilterCheckboxElement
                    key={id}
                    changeHandler={onChange}
                    name={name}
                    id={id}
                    text={title}
                  />
                );
              })
            : null}
        </ul>

        {/*{!!filtersElements?.length ? (*/}
        {/*  <ul className={classes.Additional}>{children[children.length - 1].props.children}</ul>*/}
        {/*) : null}*/}
        {showMore ? <div className={classes.ShowMore}>{showMore}</div> : null}
      </div>
    </li>
  );
};
