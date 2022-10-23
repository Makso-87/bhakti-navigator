import { gql } from '@apollo/client';

export const user = gql`
  query user {
    viewer {
      jwtAuthToken
      id
      email
      firstName
      lastName
      avatar {
        url
      }
      userACF {
        city
        age
        inIskconSince
        spiritualName
      }
    }
  }
`;
