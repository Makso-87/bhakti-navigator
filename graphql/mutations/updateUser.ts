import { gql } from '@apollo/client';

export const updateUser = gql`
  mutation updateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
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
