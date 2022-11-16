import classes from './CourseItem.module.scss';
import Link from 'next/link';
import cn from 'classnames';
import { changeAcfByRestApi, decodeId, getUniqBhakyiLevels } from '../../../../helpers/helpers';
import { Bookmarks } from '../../Bookmarks/Bookmarks';
import userStore from '../../../../store/userStore';
import { graphQLClient } from '../../../../helpers/graphQLClient';
import { userACF } from '../../../../graphql/queries/userACF';

export const CourseItem = (props) => {
  const { title, speaker, location, format, theme, bhaktiLevel, link, columnsCount = 3 } = props;
  const [, formatLabel] = format || [];

  const classesCell = cn(classes.Cell, {
    [classes.Width50]: columnsCount === 2,
    [classes.Width33]: columnsCount === 3,
  });

  const addToFavourites = async (e) => {
    e.preventDefault();
    const { id: userId, token } = userStore;

    if (!!token) {
      const decodedId = decodeId(props.id);
      const { favoriteCourses, setUserData, ...userData } = userStore;
      const ids = favoriteCourses.map((item) => decodeId(item.id));

      const newFavoriteCourses = ids.includes(decodedId)
        ? ids.filter((item) => item !== decodedId)
        : [...ids, decodedId];

      const { favorite_courses } =
        (await changeAcfByRestApi(userId, {
          favorite_courses: [...newFavoriteCourses],
        })) || {};

      if (favorite_courses) {
        const { viewer } = await graphQLClient.request(
          userACF,
          {},
          { authorization: `Bearer ${token}` }
        );

        const { favoriteCourses: updatedFavoriteCourses } = viewer.userACF;
        console.log('updatedFavoriteCourses', updatedFavoriteCourses);
        setUserData({ ...userData, favoriteCourses: updatedFavoriteCourses ?? [] });
      }
    }
  };

  return (
    <div className={classesCell}>
      <Link href={'/catalog/courses/[name]'} as={link}>
        <a>
          <div className={classes.TileItem}>
            <div className={classes.Name}>{title}</div>

            <div className={classes.Author}>{speaker}</div>

            <div className={classes.Location}>
              <span>{location}</span>
            </div>

            <div className={classes.Info}>
              <div className={classes.InfoItem}>
                <div className={classes.InfoItemName}>Формат:</div>
                <div className={`${classes.InfoItemValue} ${classes.Online}`}>{formatLabel}</div>
              </div>

              <div className={classes.InfoItem}>
                <div className={classes.InfoItemName}>Тема:</div>
                <div className={classes.InfoItemValue}>{theme}</div>
              </div>
            </div>

            <div className={classes.LocationLogo}>
              <div className={classes.Logo} />
            </div>

            <Bookmarks bhaktiLevelsList={bhaktiLevel} />

            <div onClick={addToFavourites} className={classes.AddToFavourites} />
          </div>
        </a>
      </Link>
    </div>
  );
};
