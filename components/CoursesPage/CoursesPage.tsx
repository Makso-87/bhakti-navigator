import { Layout } from '../Layout';
import { CoursesList } from '../CommonComponents/CoursesList/CoursesList';
import classes from './CoursesPage.module.scss';
import { Filters } from '../CommonComponents/Filters/Filters';
import { TopSearch } from '../CommonComponents/TopSearch/TopSearch';
import { FilterItem } from '../CommonComponents/Filters/FilterItem/FilterItem';
import { FilterElement } from '../CommonComponents/Filters/FilterElement/FilterElement';
import { HelpBanner } from '../Banners/HelpBanner/HelpBanner';

export const CoursesPage = (props) => {
  const { list } = props;
  return (
    <Layout>
      <div className={classes.CatalogPage}>
        <div className={classes.SiteWrap}>
          <div className={classes.Container}>
            <div className={classes.LeftSide}>
              <TopSearch placeholder='Поиск по курсам' />

              <CoursesList list={list} columnsCount={2} />

              <div className={classes.ShowMore}>
                <a href='#'>Больше курсов</a>
              </div>
            </div>

            <div className={classes.RightSide}>
              <Filters name='Фильтры'>
                <FilterItem name='Тема'>
                  <FilterElement name='theme' id='children' text='Воспитаение детей' />
                  <FilterElement name='theme' id='shastri' text='Священные писания' />
                  <FilterElement name='theme' id='sanskrit' text='Санскрит' />
                  <FilterElement name='theme' id='varnashrama' text='Варнашрама' />
                  <FilterElement name='theme' id='education' text='Образование' />
                </FilterItem>

                <FilterItem name='Ступень'>
                  <FilterElement name='stage' id='acquaintance' text='знакомство' />
                  <FilterElement name='stage' id='shraddha' text='шраддха' />
                  <FilterElement name='stage' id='sadhu' text='садху-санга' />
                  <FilterElement name='stage' id='bhadjana-kriya' text='бхаджана-крийя' />
                  <FilterElement name='stage' id='anartha-nivritty' text='анартха-нивритти' />
                  <FilterElement name='stage' id='nishtha' text='ништха' />
                </FilterItem>

                <FilterItem name='Преподаватель' showMore='Все преподаватели'>
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

                <FilterItem name='Формат'>
                  <FilterElement name='format' id='online' text='Онлайн' />
                  <FilterElement name='format' id='visitor-teacher' text='Приезжий преподаватель' />
                  <FilterElement name='format' id='all-russian' text='Всероссийские мероприятия' />
                  <FilterElement
                    name='format'
                    id='face-to-face'
                    text='Очные встречи'
                    location={{
                      name: 'location',
                      id: 'location',
                      list: [
                        'Москва',
                        'Санкт-Петербург',
                        'Ростов-на-Дону',
                        'Краснодар',
                        'Сочи',
                        'Челябинск',
                        'Омск',
                        'Нижний Новгород',
                        'Екатеринбург',
                      ],
                    }}
                  />
                </FilterItem>

                <FilterItem name='Пол'>
                  <FilterElement name='gender' id='prabhu' text='прабху' />
                  <FilterElement name='gender' id='matadji' text='матаджи' />
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
