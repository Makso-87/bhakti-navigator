import { gql } from '@apollo/client';

export const record = gql`
  query record($name: String) {
    posts(where: { name: $name }) {
      nodes {
        title
        link
        id
        recordACF {
          author {
            ... on Post {
              title
            }
          }
          materialType {
            ... on Post {
              id
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
