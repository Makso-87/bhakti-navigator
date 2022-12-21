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
