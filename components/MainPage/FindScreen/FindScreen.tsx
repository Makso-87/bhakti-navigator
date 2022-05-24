import Link from 'next/link';
import classes from './FindScreen.module.scss';

export const FindScreen = (props) => {
  return (
    <div className={classes.FindScreen} id='find'>
      <div className={classes.SiteWrap}>
        <h2>Найти</h2>

        <div className={classes.AboutText}>
          В{' '}
          <Link href='/navigator/catalog.php'>
            <a>Каталоге</a>
          </Link>{' '}
          представлены образовательные программы и преподаватели по разным темам, дисциплинам и для
          разных ступеней изучения. Воспользуйтесь фильтрами, чтобы найти тот курс, который вы
          хотели бы пройти, или ведущего, у которого хотели бы учиться.
        </div>

        <div className={classes.Note}>*Каталог актуален для разных регионов России</div>

        <div className={classes.Tile}>
          <div className={classes.Cell}>
            <Link href='/navigator/course_item.php'>
              <a>
                <div className={`${classes.TileItem} ${classes.Vedi}`}>
                  <div className={classes.Name}>Вайшнавский этикет</div>

                  <div className={classes.Author}>Анагха даc</div>

                  <div className={classes.Location}>
                    <span>Храм Кришны в Москве</span>
                  </div>

                  <div className={classes.Info}>
                    <div className={classes.InfoItem}>
                      <div className={classes.InfoItemName}>Формат:</div>
                      <div className={`${classes.InfoItemValue} ${classes.Online}`}>Онлайн</div>
                    </div>

                    <div className={classes.InfoItem}>
                      <div className={classes.InfoItemName}>Тема:</div>
                      <div className={classes.InfoItemValue}>культура</div>
                    </div>
                  </div>

                  <div className={classes.LocationLogo}>
                    <div className={classes.Logo} />
                  </div>
                </div>
              </a>
            </Link>
          </div>

          <div className={classes.Cell}>
            <Link href='/navigator/course_item.php'>
              <a>
                <div className={`${classes.TileItem} ${classes.Shradha}`}>
                  <div className={classes.Name}>
                    Санскрит на основе
                    <br /> Бхагавад-гиты
                  </div>

                  <div className={classes.Author}>Бхакти Вигьяна Госвами</div>

                  <div className={classes.Location}>
                    <span>Goswami Studio</span>
                  </div>

                  <div className={classes.Info}>
                    <div className={classes.InfoItem}>
                      <div className={classes.InfoItemName}>Формат:</div>
                      <div className={`${classes.InfoItemValue} ${classes.Online}`}>Онлайн</div>
                    </div>

                    <div className={classes.InfoItem}>
                      <div className={classes.InfoItemName}>Тема:</div>
                      <div className={classes.InfoItemValue}>культура, санскрит</div>
                    </div>
                  </div>

                  <div className={classes.LocationLogo}>
                    <div className={classes.Logo} />
                  </div>
                </div>
              </a>
            </Link>
          </div>

          <div className={classes.Cell}>
            <Link href='/navigator/course_item.php'>
              <a>
                <div className={`${classes.TileItem} ${classes.Sadhusanga}`}>
                  <div className={classes.Name}>Ученик в ИСККОН</div>

                  <div className={classes.Author}>Парамананда Пури дас</div>

                  <div className={classes.Location}>
                    <span>Бхакти-центр (Москва)</span>
                  </div>

                  <div className={classes.Info}>
                    <div className={classes.InfoItem}>
                      <div className={classes.InfoItemName}>Формат:</div>
                      <div className={classes.InfoItemValue}>Очное обучение</div>
                    </div>

                    <div className={classes.InfoItem}>
                      <div className={classes.InfoItemName}>Тема:</div>
                      <div className={classes.InfoItemValue}>дикша</div>
                    </div>
                  </div>

                  <div className={classes.LocationLogo}>
                    <div className={classes.Logo} />
                  </div>
                </div>
              </a>
            </Link>
          </div>

          <div className={classes.Cell}>
            <Link href='/navigator/course_item.php'>
              <a>
                <div className={`${classes.TileItem} ${classes.BhadjanaKriya}`}>
                  <div className={classes.Name}>Вечные ответы (преподавание)</div>

                  <div className={classes.Author}>Ачинтья Кришна дас</div>

                  <div className={classes.Location}>
                    <span>Бхакти-лата</span>
                  </div>

                  <div className={classes.Info}>
                    <div className={classes.InfoItem}>
                      <div className={classes.InfoItemName}>Формат:</div>
                      <div className={`${classes.InfoItemValue} ${classes.Online}`}>Онлайн</div>
                    </div>

                    <div className={classes.InfoItem}>
                      <div className={classes.InfoItemName}>Тема:</div>
                      <div className={classes.InfoItemValue}>Веды</div>
                    </div>
                  </div>

                  <div className={classes.LocationLogo}>
                    <div className={classes.Logo} />
                  </div>
                </div>
              </a>
            </Link>
          </div>

          <div className={classes.Cell}>
            <Link href='/navigator/course_item.php'>
              <a>
                <div className={`${classes.TileItem} ${classes.Nishtha}`}>
                  <div className={classes.Name}>Бхакти-шастры онлайн</div>

                  <div className={classes.Location}>
                    <span>Отдел вайшнавского образования ЦОСКР</span>
                  </div>

                  <div className={classes.Info}>
                    <div className={classes.InfoItem}>
                      <div className={classes.InfoItemName}>Формат:</div>
                      <div className={`${classes.InfoItemValue} ${classes.Online}`}>Онлайн</div>
                    </div>

                    <div className={classes.InfoItem}>
                      <div className={classes.InfoItemName}>Тема:</div>
                      <div className={classes.InfoItemValue}>шастры</div>
                    </div>
                  </div>

                  <div className={classes.LocationLogo}>
                    <div className={classes.Logo} />
                  </div>
                </div>
              </a>
            </Link>
          </div>

          <div className={classes.Cell}>
            <Link href='/navigator/course_item.php'>
              <a>
                <div className={`${classes.TileItem} ${classes.AnyStage}`}>
                  <div className={classes.Name}>Курс подготовки учителей</div>

                  <div className={classes.Location}>
                    <span>Отдел вайшнавского образования ЦОСКР</span>
                  </div>

                  <div className={classes.Info}>
                    <div className={classes.InfoItem}>
                      <div className={classes.InfoItemName}>Формат:</div>
                      <div className={classes.InfoItemValue}>Очное обучение</div>
                    </div>

                    <div className={classes.InfoItem}>
                      <div className={classes.InfoItemName}>Тема:</div>
                      <div className={classes.InfoItemValue}>шастры</div>
                    </div>
                  </div>

                  <div className={classes.LocationLogo}>
                    <div className={classes.Logo} />
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>

        <div className={classes.GoToBlog}>
          <Link href='/navigator/catalog.php'>
            <a>Перейти в Каталог</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
