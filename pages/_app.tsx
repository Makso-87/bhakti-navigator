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
import { useEffect } from 'react';
import { graphQLClient } from '../helpers/graphQLClient';
import { user } from '../graphql/queries/user';
import UserStore from '../store/userStore';
import { getCookie } from '../helpers/cookies';

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    const cookie = getCookie('authorization');
    console.log('cookie', cookie, 'UserStore', UserStore);

    if (UserStore.token === '' && cookie) {
      graphQLClient
        .request(user, {}, { authorization: `Bearer ${cookie}` })
        .then(({ viewer }) => {
          if (viewer) {
            const { id, email, firstName, lastName, avatar, userACF } = viewer;
            const { city, age, inIskconSince, spiritualName } = userACF;

            UserStore.setUserData({
              id,
              email,
              firstName,
              lastName,
              avatar: avatar.url,
              token: viewer.jwtAuthToken,
              city,
              age,
              inIskconSince,
              spiritualName,
            });
          }
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }, []);

  console.log('app rendered');

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
