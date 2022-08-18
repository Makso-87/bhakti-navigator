import classes from './AboutScreen.module.scss';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../../../images/slide_1.jpg';

export const AboutScreen = (props) => {
  return (
    <div className={classes.AboutScreen}>
      <div className={classes.SiteWrap}>
        <div className={classes.Content}>
          <div className={classes.LeftSide}>
            <p className={classes.StrongText}>
              Ученик в ИСККОН - это основополагающий курс, предназначенный для всех преданных
              ИСККОН. Он предназначен для того, чтобы помочь преданным углубить свое понимание
              взаимоотношений с духовными учителями в нашем обществе, а также укрепить отношения со
              Шрилой Прабхупадой.
            </p>

            <p className={classes.Text}>
              Курс будет полезен всем без исключения - его проходят как совсем начинающие вайшнавы,
              которые еще только хотят найти духовного учителя, так и действующие дикша-гуру или
              члены Джи-Би-Си.
            </p>

            <p className={classes.Text}>
              На курсе вы получите понимание уникального положения Шрилы Прабхупады, видение
              организационной структуры ИСККОН, ощущение единства в рамках семьи Шрилы Прабхупады,
              понимание того, как найти духовного учителя и общаться с ним. Авторы курса - члены
              комитета служения гуру при Джи-Би-Си: Прахладананда Махарадж, Ануттама дас, Атул
              Кришна дас, Лакшмимони деви даси.
            </p>

            <p className={classes.Text}>«Шрила Прабхупада, будучи ачарьей основателем</p>

            <p className={classes.Text}>
              Международного общества сознания Кришны (ИСККОН), является главным шикша-гуру для всех
              членов ИСККОН. Все члены ИСККОН, в том числе последующие поколения преданных, должны
              принять прибежище у Шрилы Прабхупады. Все члены ИСККОН могут и должны иметь личные
              отношения со Шрилой Прабхупадой через его книги и наставления, служение и его общество
              ИСККОН».
            </p>

            <p className={classes.Text}>303 резолюция Джи-Би-Си (2013 год)</p>
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
                <SwiperSlide
                  className={classes.SwiperSlide}
                  style={{ backgroundImage: `url(${slide1.src})` }}
                />
                <SwiperSlide
                  className={classes.SwiperSlide}
                  style={{ backgroundImage: `url(${slide1.src})` }}
                />
                <SwiperSlide
                  className={classes.SwiperSlide}
                  style={{ backgroundImage: `url(${slide1.src})` }}
                />
                <SwiperSlide
                  className={classes.SwiperSlide}
                  style={{ backgroundImage: `url(${slide1.src})` }}
                />
                <SwiperSlide
                  className={classes.SwiperSlide}
                  style={{ backgroundImage: `url(${slide1.src})` }}
                />
              </Swiper>

              <div className='swiper-button-prev' />
              <div className='swiper-button-next' />
              <div className='swiper-pagination' />
            </div>
          </div>
        </div>

        <div className={classes.MediaContainer}>
          <div className={classes.MediaBox}>
            <div className={`${classes.Media} ${classes.Video}`}>
              <iframe
                src='https://www.youtube.com/embed/28XbF-Qdkko'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
