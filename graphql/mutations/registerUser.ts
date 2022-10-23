import { gql } from '@apollo/client';

export const registerUser = gql`
  mutation registerUser($input: RegisterUserInput!) {
    registerUser(input: $input) {
      user {
        id
        email
      }
    }
  }
`;
