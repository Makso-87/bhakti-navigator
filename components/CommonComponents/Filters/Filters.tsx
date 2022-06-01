import classes from './Filters.module.scss';

export const Filters = () => {
  return (
    <form className={classes.Filters}>
      <div className={classes.Title}>Фильтры</div>

      <ul className={classes.CategoriesList}>
        <li className={classes.CategoriesItem}>
          <a className='trigger' href='#'>
            Тема
          </a>

          <div className={classes.ListContainer}>
            <ul>
              <li>
                <div className={classes.InputItem}>
                  <input name='theme' type='radio' id='children' />
                  <label htmlFor='children'>Воспитаение детей</label>
                </div>
              </li>

              <li>
                <div className={classes.InputItem}>
                  <input name='theme' type='radio' id='shastri' />
                  <label htmlFor='shastri'>Священные писания</label>
                </div>
              </li>

              <li>
                <div className={classes.InputItem}>
                  <input name='theme' type='radio' id='sanskrit' />
                  <label htmlFor='sanskrit'>Санскрит</label>
                </div>
              </li>

              <li>
                <div className={classes.InputItem}>
                  <input name='theme' type='radio' id='varnashrama' />
                  <label htmlFor='varnashrama'>Варнашрама</label>
                </div>
              </li>

              <li>
                <div className={classes.InputItem}>
                  <input name='theme' type='radio' id='education' />
                  <label htmlFor='education'>Образование</label>
                </div>
              </li>
            </ul>
          </div>
        </li>

        <li className={classes.CategoriesItem}>
          <a className='trigger' href='#'>
            Ступень
          </a>

          <div className={classes.ListContainer}>
            <ul>
              <li>
                <div className={classes.InputItem}>
                  <input name='stage' type='radio' id='acquaintance' />
                  <label htmlFor='acquaintance'>знакомство</label>
                </div>
              </li>

              <li>
                <div className={classes.InputItem}>
                  <input name='stage' type='radio' id='shraddha' />
                  <label htmlFor='shraddha'>шраддха</label>
                </div>
              </li>

              <li>
                <div className={classes.InputItem}>
                  <input name='stage' type='radio' id='sadhu-sanga' />
                  <label htmlFor='sadhu-sanga'>садху - санга</label>
                </div>
              </li>

              <li>
                <div className={classes.InputItem}>
                  <input name='stage' type='radio' id='bhadjana-kriya' />
                  <label htmlFor='bhadjana-kriya'>бхаджана-крийя</label>
                </div>
              </li>

              <li>
                <div className={classes.InputItem}>
                  <input name='stage' type='radio' id='anarha-nivritty' />
                  <label htmlFor='anarha-nivritty'>анартха-нивритти</label>
                </div>
              </li>

              <li>
                <div className={classes.InputItem}>
                  <input name='stage' type='radio' id='nishtha' />
                  <label htmlFor='nishtha'>ништха</label>
                </div>
              </li>
            </ul>
          </div>
        </li>

        <li className={classes.CategoriesItem}>
          <a className='trigger' href='#'>
            Преподаватель
          </a>

          <div className={classes.ListContainer}>
            <ul>
              <li>
                <div className={classes.InputItem}>
                  <input name='teacher' type='radio' id='bvgm' />
                  <label htmlFor='bvgm'>Бхакти Вигьяна Госвами</label>
                </div>
              </li>

              <li>
                <div className={classes.InputItem}>
                  <input name='teacher' type='radio' id='chaitanya-chandra-charan' />
                  <label htmlFor='chaitanya-chandra-charan'>Чайтанья Чандра Чаран дас</label>
                </div>
              </li>

              <li>
                <div className={classes.InputItem}>
                  <input name='teacher' type='radio' id='tirtha-pavana' />
                  <label htmlFor='tirtha-pavana'>Тиртха-Павана дас</label>
                </div>
              </li>

              <li>
                <div className={classes.InputItem}>
                  <input name='teacher' type='radio' id='vatsala' />
                  <label htmlFor='vatsala'>Ватсала дас</label>
                </div>
              </li>

              <li>
                <div className={classes.InputItem}>
                  <input name='teacher' type='radio' id='jiva' />
                  <label htmlFor='jiva'>Джива Госвами дас</label>
                </div>
              </li>

              <li>
                <div className={classes.InputItem}>
                  <input name='teacher' type='radio' id='paramananda-pury' />
                  <label htmlFor='paramananda-pury'>Парамананда Пури дас</label>
                </div>
              </li>

              <li>
                <div className={classes.InputItem}>
                  <input name='teacher' type='radio' id='sarvagya' />
                  <label htmlFor='sarvagya'>Сарвагья дас</label>
                </div>
              </li>

              <li>
                <div className={classes.InputItem}>
                  <input name='teacher' type='radio' id='radha-prema' />
                  <label htmlFor='radha-prema'>Радха Према деви даси</label>
                </div>
              </li>

              <li>
                <div className={classes.InputItem}>
                  <input name='teacher' type='radio' id='thakur-haridas' />
                  <label htmlFor='thakur-haridas'>Тхакур Харидас дас</label>
                </div>
              </li>

              <li>
                <div className={classes.InputItem}>
                  <input name='teacher' type='radio' id='devakinanda' />
                  <label htmlFor='devakinanda'>Девакинандана дас</label>
                </div>
              </li>

              <li>
                <div className={classes.InputItem}>
                  <input name='teacher' type='radio' id='varshana' />
                  <label htmlFor='varshana'>Варшана дас</label>
                </div>
              </li>

              <li>
                <div className={classes.InputItem}>
                  <input name='teacher' type='radio' id='nityananda-charan' />
                  <label htmlFor='nityananda-charan'>Нитьянанда Чаран дас</label>
                </div>
              </li>
            </ul>

            <ul className='additional'>
              <li>
                <div className={classes.InputItem}>
                  <input name='teacher' type='radio' id='radhanatha-svami' />
                  <label htmlFor='radhanatha-svami'>Радхананатха Свами</label>
                </div>
              </li>

              <li>
                <div className={classes.InputItem}>
                  <input name='teacher' type='radio' id='indradewmna-svami' />
                  <label htmlFor='indradewmna-svami'>Индрадьюмна Свами</label>
                </div>
              </li>

              <li>
                <div className={classes.InputItem}>
                  <input name='teacher' type='radio' id='gopal-krishna-gosvami' />
                  <label htmlFor='gopal-krishna-gosvami'>Гопал Кришна Госвами</label>
                </div>
              </li>
            </ul>

            <div className='show-more'>Все преподаватели</div>
          </div>
        </li>

        <li className={classes.CategoriesItem}>
          <a className='trigger' href='#'>
            Формат
          </a>
          <div className={classes.ListContainer}>
            <ul>
              <li>
                <div className={classes.InputItem}>
                  <input name='format' type='radio' id='online' />
                  <label htmlFor='online'>Онлайн</label>
                </div>
              </li>

              <li>
                <div className={classes.InputItem}>
                  <input name='format' type='radio' id='visitor-teacher' />
                  <label htmlFor='visitor-teacher'>Приезжий преподаватель</label>
                </div>
              </li>

              <li>
                <div className={classes.InputItem}>
                  <input name='format' type='radio' id='all-rissian' />
                  <label htmlFor='all-rissian'>Всероссийские мероприятия</label>
                </div>
              </li>

              <li>
                <div className={classes.InputItem}>
                  <input name='format' type='radio' id='face-to-face' />
                  <label htmlFor='face-to-face'>Очные встречи</label>
                </div>

                <div className={classes.Location}>
                  <select name='location' id='location'>
                    <option value='0'>Москва</option>
                    <option value='1'>Санкт-Петербург</option>
                    <option value='2'>Москва</option>
                    <option value='3'>Санкт-Петербург</option>
                    <option value='4'>Москва</option>
                    <option value='5'>Санкт-Петербург</option>
                    <option value='6'>Москва</option>
                    <option value='7'>Санкт-Петербург</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>
        </li>

        <li className={classes.CategoriesItem}>
          <a className='trigger' href='#'>
            Пол
          </a>

          <div className={classes.ListContainer}>
            <ul>
              <li>
                <div className={classes.InputItem}>
                  <input name='gender' type='radio' id='prabhu' />
                  <label htmlFor='prabhu'>прабху</label>
                </div>
              </li>

              <li>
                <div className={classes.InputItem}>
                  <input name='gender' type='radio' id='matadji' />
                  <label htmlFor='matadji'>матаджи</label>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </form>
  );
};
