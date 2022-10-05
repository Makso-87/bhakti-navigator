import '../css/fonts.css';
import '../css/normalize.css';
import '../css/globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import NextNProgress from 'nextjs-progressbar';
import { PopupState } from '../context/popupState';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../helpers/apolloClient';

const App = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <PopupState>
        <NextNProgress
          nonce='my-nonce'
          color='#718ED1'
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
          options={{ easing: 'ease', speed: 500 }}
        />
        <Component {...pageProps} />
      </PopupState>
    </ApolloProvider>
  );
};

export default App;
