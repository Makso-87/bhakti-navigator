import Head from 'next/head';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import bhaktiNavigatorLogo from '../../images/icons/bhakti-navigator-logo.png';

export const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Head>
        <title>Бхакти навигатор</title>
        <link rel='shortcut icon' href={`${bhaktiNavigatorLogo.src}`} type='image/x-icon' />
      </Head>

      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
};
