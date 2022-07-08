import Head from 'next/head';
import { CSSTransition } from 'react-transition-group';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import bhaktiNavigatorLogo from '../../images/icons/bhakti-navigator-logo.png';
import { useContext } from 'react';
import { PopupContext } from '../../context/popupContext';
import { AnswerVideoOverlay } from '../CommonComponents/AnswerVideoOverlay/AnswerVideoOverlay';

export const Layout = (props) => {
  const { children } = props;
  const popupContextData = useContext(PopupContext);

  return (
    <>
      <Head>
        <title>Бхакти навигатор</title>
        <link rel='shortcut icon' href={`${bhaktiNavigatorLogo.src}`} type='image/x-icon' />
      </Head>

      <Header />

      <main>{children}</main>

      <Footer />

      <CSSTransition
        in={popupContextData?.popupVideo.state}
        timeout={400}
        mountOnEnter={true}
        unmountOnExit={true}
      >
        {(state) => (
          <AnswerVideoOverlay className={state} videoUrl={popupContextData.popupVideo.link} />
        )}
      </CSSTransition>
    </>
  );
};
