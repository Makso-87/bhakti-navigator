import { GraphQLClient } from 'graphql-request';
import config from '../config/config';

export const graphQLClient = new GraphQLClient(config.GRAPHQL_HOST);
