import { gql } from '@apollo/client';

export const resetUserPassword = gql`
  mutation resetUserPassword($input: ResetUserPasswordInput!) {
    resetUserPassword(input: $input) {
      user {
        id
        email
      }
    }
  }
`;
