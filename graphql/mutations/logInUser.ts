import { gql } from '@apollo/client';

export const logInUser = gql`
  mutation LoginUser($input: LoginInput!) {
    login(input: $input) {
      authToken
      user {
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
  }
`;
