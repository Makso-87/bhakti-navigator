import { gql } from '@apollo/client';

export const materials = gql`
  query materials {
    posts(first: 100, where: { categoryName: "materials" }) {
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
          type
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
