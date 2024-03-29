import classes from './AboutScreen.module.scss';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Post } from '../../../interfaces/interfaces';
import { formatVideoUrl, getLinksList } from '../../../helpers/helpers';
import { Quote } from '../../ArticlesItemPage/Quote/Quote';

export const AboutScreen = ({ post }: { post: Post }) => {
  const { projectACF, teacherACF, courseACF } = post;
  const {
    about = '',
    video = '',
    quote,
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
  } = projectACF || teacherACF || courseACF || {};

  const gallery = [slide1, slide2, slide3, slide4, slide5];
  const videoList = getLinksList(video);

  return (
    <div className={classes.AboutScreen}>
      <div className={classes.SiteWrap}>
        <div className={classes.Content}>
          <div className={classes.LeftSide}>
            <div className={classes.Text} dangerouslySetInnerHTML={{ __html: about }} />
          </div>

          <div className={classes.RightSide}>
            <div className={classes.Slider} id='courses-about-screen-slider'>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                pagination={{ el: '.swiper-pagination', type: 'bullets', clickable: true }}
                className={classes.Swiper}
              >
                {gallery.length
                  ? gallery.map((item) => {
                      return item ? (
                        <SwiperSlide
                          key={item.id}
                          className={classes.SwiperSlide}
                          style={{ backgroundImage: `url(${item.sourceUrl})` }}
                        />
                      ) : null;
                    })
                  : null}
              </Swiper>

              <div className='swiper-button-prev' />
              <div className='swiper-button-next' />
              <div className='swiper-pagination' />
            </div>
          </div>
        </div>

        {quote ? <Quote content={quote} className={classes.Quote} /> : null}

        {video ? (
          <div className={classes.MediaContainer}>
            {videoList.map((item, index) => {
              const link = formatVideoUrl(item);
              return (
                <div key={index} className={classes.MediaBox}>
                  <div className={`${classes.Media} ${classes.Video}`}>
                    <iframe
                      src={link}
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen={true}
                    ></iframe>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};
