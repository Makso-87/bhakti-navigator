import { Layout } from '../Layout';
import classes from './FAQPage.module.scss';
import { Filters } from '../CommonComponents/Filters/Filters';
import { FilterItem } from '../CommonComponents/Filters/FilterItem/FilterItem';
import { FilterElement } from '../CommonComponents/Filters/FilterElement/FilterElement';
import { TopSearch } from '../CommonComponents/TopSearch/TopSearch';
import { FAQList } from '../CommonComponents/FAQList/FAQList';
import { QuestionForm } from '../CommonComponents/QuestionForm/QuestionForm';
import { Button } from '../CommonComponents/Button/Button';

export const FAQPage = ({ list }) => {
  return (
    <Layout>
      <div className={classes.FaqPage}>
        <div className={classes.SiteWrap}>
          <div className={classes.Container}>
            <div className={classes.LeftSide}>
              <TopSearch placeholder='Поиск по ответам' />

              <div className={classes.Text}>
                <p>
                  В рубрике «QA | Вопросы и ответы» лидеры, проповедники, преподаватели и духовные
                  учители ИСККОН отвечают на вопросы преданных и делятся своими реализациями на тему
                  духовного роста и его особенностей в жизни тех, кто встал на путь бхакти и хочет
                  серьезно практиковать духовную жизнь, следуя наставлениям А.Ч. Бхактиведанты Свами
                  Прабхупады.
                </p>
              </div>

              <Button
                text='Задайте ваш вопрос'
                link='#question-form'
                margin='0 0 80px'
                simpleLink={true}
              />

              <FAQList list={list} />

              <div className={classes.ShowMore}>
                <a href='#'>Показать больше</a>
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
              </Filters>
            </div>
          </div>
        </div>

        <QuestionForm />

        <div className={classes.InfoText}>
          <div className={classes.Text}>
            Самые насущные вопросы мы зададим экспертам рубрики QA. Следите за обновлениями на{' '}
            <a href='#'>Youtube</a> канале{' '}
          </div>
        </div>
      </div>
    </Layout>
  );
};
