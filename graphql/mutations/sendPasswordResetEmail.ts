import { gql } from '@apollo/client';

export const sendPasswordResetEmail = gql`
  mutation sendPasswordResetEmail($input: SendPasswordResetEmailInput!) {
    sendPasswordResetEmail(input: $input) {
      user {
        id
        email
      }
    }
  }
`;
