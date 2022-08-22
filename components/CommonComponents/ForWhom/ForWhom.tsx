import classes from './ForWhom.module.scss';
import { forWhomToArray } from '../../../helpers/helpers';

export const ForWhom = ({ text = '' }: { text: string }) => {
  const forWhomList = forWhomToArray(text);

  return (
    <div className={classes.ForWhomScreen}>
      <div className={classes.SiteWrap}>
        <h2>Кому подойдет этот курс</h2>

        <ul className={classes.List}>
          {forWhomList.length
            ? forWhomList.map((item, index) => {
                return (
                  <li key={index}>
                    <div className={classes.Content}>
                      <span className={classes.StrongText}>{item}</span>
                      {/*<span className={classes.Text}>*/}
                      {/*  Курс поможет вам лучше понять науку взаимоотношений с духовными учителями.{' '}*/}
                      {/*</span>*/}
                    </div>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </div>
  );
};
