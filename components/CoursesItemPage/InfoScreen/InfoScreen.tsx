import classes from './InfoScreen.module.scss';
import { clearContentFromAttrs } from '../../../helpers/helpers';

export const InfoScreen = ({ text = '' }: { text?: string }) => {
  return (
    <div className={classes.InfoScreen}>
      <div className={classes.SiteWrap}>
        <div className={classes.Content}>
          <div className={classes.Icon} />

          <div
            className={classes.Text}
            dangerouslySetInnerHTML={{ __html: clearContentFromAttrs(text) }}
          />
        </div>
      </div>
    </div>
  );
};
