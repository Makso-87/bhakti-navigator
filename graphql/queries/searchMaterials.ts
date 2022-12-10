import { gql } from '@apollo/client';

export const searchMaterials = gql`
  query searchMaterials($search: String!) {
    posts(first: 100, after: null, where: { search: $search, categoryName: "materials" }) {
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
