import classes from './Recommendations.module.scss';
import { MaterialsList } from '../MaterialsList/MaterialsList';
import { FAQList } from '../FAQList/FAQList';
import { Articles } from '../Articles/Articles';

export const Recommendations = (props) => {
  return (
    <div className={classes.RecommendationsScreen}>
      <div className={classes.SiteWrap}>
        <h2>Рекомендуем изучить</h2>

        <MaterialsList />

        <FAQList />

        {/*<Articles list={} tileMaxCount={2} />*/}
      </div>
    </div>
  );
};
