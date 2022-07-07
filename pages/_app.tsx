import '../css/fonts.css';
import '../css/normalize.css';
import '../css/globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import NextNProgress from 'nextjs-progressbar';
import { PopupState } from '../context/popupState';

const App = ({ Component, pageProps }) => {
  return (
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
  );
};

export default App;
