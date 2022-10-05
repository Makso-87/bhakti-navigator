import { ApolloClient, InMemoryCache } from '@apollo/client';
import config from '../config/config';

export const apolloClient = new ApolloClient({
  uri: config.GRAPHQL_HOST,
  cache: new InMemoryCache(),
});
