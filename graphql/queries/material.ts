import { gql } from '@apollo/client';

export const material = gql`
  query material($name: String) {
    posts(where: { name: $name }) {
      nodes {
        title
        link
        id
        materialACF {
          author {
            ... on Post {
              title
            }
          }
          type {
            ... on Post {
              materialsTypeACF {
                value
              }
            }
          }
          description
          downloadLink
          audioLink
          onlineLink
          themes {
            ... on Post {
              title
            }
          }
          mainTheme {
            ... on Post {
              title
            }
          }
          bhaktiLevel {
            ... on Post {
              id
              title
              bhaktiLevelACF {
                value
              }
            }
          }
        }
      }
    }
  }
`;
