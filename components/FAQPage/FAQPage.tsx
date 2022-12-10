import { Layout } from '../Layout';
import classes from './FAQPage.module.scss';
import { Filters } from '../CommonComponents/Filters/Filters';
import { FilterItem } from '../CommonComponents/Filters/FilterItem/FilterItem';
import { FilterElement } from '../CommonComponents/Filters/FilterElement/FilterElement';
import { TopSearch } from '../CommonComponents/TopSearch/TopSearch';
import { FAQList } from '../CommonComponents/FAQList/FAQList';
import { QuestionForm } from '../CommonComponents/QuestionForm/QuestionForm';
import { Button } from '../CommonComponents/Button/Button';
import { searchMaterials } from '../../graphql/queries/searchMaterials';
import { getLink } from '../../helpers/helpers';
import { useLazyQuery } from '@apollo/client';
import { useState } from 'react';
import { GraphQLErrors } from '@apollo/client/errors';
import { searchFaq } from '../../graphql/queries/searchFaq';
import { Preloader } from '../CommonComponents/Preloader/Preloader';
import pagesStore from '../../store/pagesStore';
import { observer } from 'mobx-react-lite';

export const FAQPage = observer((props) => {
  const [list, setList] = useState([...(props.list ?? [])]);
  const [error, setError] = useState<GraphQLErrors | string>([]);
  const place = pagesStore.currentPage;

  const [fetchFaqList, { loading }] = useLazyQuery(searchFaq, {
    notifyOnNetworkStatusChange: true,
    onCompleted: ({ posts }) => {
      if (posts.nodes.length) {
        const newList = posts.nodes.map((item) => {
          const { title, faqACF } = item;
          const { author, videoUrl, videoDuration, previewImage } = faqACF;
          return {
            title,
            author,
            videoUrl,
            videoDuration,
            imgUrl: previewImage.sourceUrl,
          };
        });

        setList([...newList]);
      } else {
        setList([]);
      }
    },
    onError: (error) => {
      setError(error.graphQLErrors ?? '');
      console.error(error);
    },
  });

  const onSearch = async (searchQuery: string) => {
    await fetchFaqList({
      variables: {
        search: searchQuery,
      },
    });
  };

  const applyFilters = (filter) => {
    // const filterKeys = Object.keys(filter);
    // const filtered = filterPosts(props?.list, filter);
    //
    // setList(filterKeys.length ? [...filtered] : [...props?.list]);
  };

  return (
    <Layout>
      <div className={classes.FaqPage}>
        <div className={classes.SiteWrap}>
          <div className={classes.Container}>
            <div className={classes.LeftSide}>
              <TopSearch searchHandler={onSearch} placeholder='Поиск по ответам' />

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

              {loading ? (
                <div className={classes.LoaderContainer}>
                  <Preloader />
                </div>
              ) : (
                <FAQList list={list} />
              )}

              {!loading && list.length > 6 ? (
                <div className={classes.ShowMore}>
                  <a href='#'>Показать больше</a>
                </div>
              ) : null}
            </div>

            <div className={classes.RightSide}>
              <Filters name='Фильтры' place={place} applyFilters={applyFilters} />
            </div>
          </div>
        </div>

        <QuestionForm />

        {/*<div className={classes.InfoText}>*/}
        {/*  <div className={classes.Text}>*/}
        {/*    Самые насущные вопросы мы зададим экспертам рубрики QA. Следите за обновлениями на{' '}*/}
        {/*    <a href='#'>Youtube</a> канале{' '}*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </Layout>
  );
});
