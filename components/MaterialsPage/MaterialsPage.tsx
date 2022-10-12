import { Layout } from '../Layout';
import classes from '../CoursesPage/CoursesPage.module.scss';
import { TopSearch } from '../CommonComponents/TopSearch/TopSearch';
import { MaterialsList } from '../CommonComponents/MaterialsList/MaterialsList';
import { Filters } from '../CommonComponents/Filters/Filters';
import { FilterItem } from '../CommonComponents/Filters/FilterItem/FilterItem';
import { FilterElement } from '../CommonComponents/Filters/FilterElement/FilterElement';
import { HelpBanner } from '../Banners/HelpBanner/HelpBanner';

export const MaterialsPage = (props) => {
  const { list } = props;
  return (
    <Layout>
      <div className={classes.CatalogPage}>
        <div className={classes.SiteWrap}>
          <div className={`${classes.Container} ${classes.Materials}`}>
            <div className={classes.LeftSide}>
              <TopSearch placeholder='Поиск по материалам' />

              <MaterialsList list={list} />

              <div className={classes.ShowMore}>
                <a href='#'>Больше материалов</a>
              </div>
            </div>

            <div className={classes.RightSide}>
              <Filters name='Фильтры'>
                <FilterItem name='Тип материалов'>
                  <FilterElement name='materials-type' id='children' text='Видео' />
                  <FilterElement name='materials-type' id='shastri' text='Аудио' />
                  <FilterElement name='materials-type' id='sanskrit' text='Книги' />
                  <FilterElement name='materials-type' id='varnashrama' text='Учебные материалы' />
                </FilterItem>

                <FilterItem name='Тема'>
                  <FilterElement name='theme' id='children' text='Воспитаение детей' />
                  <FilterElement name='theme' id='shastri' text='Священные писания' />
                  <FilterElement name='theme' id='sanskrit' text='Санскрит' />
                  <FilterElement name='theme' id='varnashrama' text='Варнашрама' />
                  <FilterElement name='theme' id='education' text='Образование' />
                </FilterItem>

                <FilterItem name='Ступень'>
                  <FilterElement name='stage' id='before-shraddha' text='знакомство' />
                  <FilterElement name='stage' id='shraddha' text='шраддха' />
                  <FilterElement name='stage' id='sadhu-sanga' text='садху-санга' />
                  <FilterElement name='stage' id='bhadjana-kriya' text='бхаджана-крийя' />
                  <FilterElement name='stage' id='anarha-nivritty' text='анартха-нивритти' />
                  <FilterElement name='stage' id='nishtha' text='ништха' />
                </FilterItem>

                <FilterItem name='Автор' showMore='Все преподаватели'>
                  <FilterElement name='teacher' id='bvgm' text='Бхакти Вигьяна Госвами' />
                  <FilterElement
                    name='teacher'
                    id='chaitanya-chandra-charan'
                    text='Чайтанья Чандра Чаран дас'
                  />
                  <FilterElement name='teacher' id='tirtha-pavana' text='Тиртха-Павана дас' />
                  <FilterElement name='teacher' id='vatsala' text='Ватсала дас' />
                  <FilterElement name='teacher' id='jiva-goswami' text='Джива Госвами дас' />
                  <FilterElement name='teacher' id='paramananda-pury' text='Парамананда Пури дас' />
                  <FilterElement name='teacher' id='sarvagya' text='Сарвагья дас' />
                  <FilterElement name='teacher' id='radha-prema' text='Радха Према деви даси' />
                  <FilterElement name='teacher' id='thakur-haridas' text='Тхакур Харидас дас' />
                  <FilterElement name='teacher' id='devakinanda' text='Девакинандана дас' />
                  <FilterElement name='teacher' id='varshana' text='Варшана дас' />
                  <FilterElement
                    name='teacher'
                    id='nityananda-charan'
                    text='Нитьянанда Чаран дас'
                  />

                  <div>
                    <FilterElement name='teacher' id='radhanatha-svami' text='Радхананатха Свами' />
                    <FilterElement name='teacher' id='indradewmna-svami' text='Индрадьюмна Свами' />
                    <FilterElement
                      name='teacher'
                      id='gopal-krishna-gosvami'
                      text='Гопал Кришна Госвами'
                    />
                  </div>
                </FilterItem>
              </Filters>
            </div>
          </div>
        </div>

        <HelpBanner marginBottomNone={true} />
      </div>
    </Layout>
  );
};
