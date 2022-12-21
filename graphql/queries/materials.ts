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
              id
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
          themes {
            ... on Post {
              id
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
