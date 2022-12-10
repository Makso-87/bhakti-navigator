import { gql } from '@apollo/client';

export const searchRecords = gql`
  query searchRecords($search: String!) {
    posts(first: 100, after: null, where: { search: $search, categoryName: "records" }) {
      nodes {
        title
        link
        id
        recordACF {
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
          type {
            ... on Post {
              materialsTypeACF {
                value
              }
            }
          }
          author {
            ... on Post {
              title
            }
          }
        }
      }
    }
  }
`;
